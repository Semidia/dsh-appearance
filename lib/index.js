import { settingsNamespace } from "@deepseek-ai/dsh-settings";
import z from "@deepseek-ai/schemastery";

//#region settings
/**
 * Durable schema for one workspace's appearance; also the wire envelope the
 * browser scope validates against. 0 / "" mean "inherit the global theme".
 */
const WorkspaceAppearanceSchema = z.object({
	background: z.string().default(""),
	backgroundImage: z.string().default(""),
	fontSize: z.number().min(0).max(28).default(0),
	lineHeight: z.number().min(0).max(56).default(0),
	paragraphSpacing: z.number().min(0).max(48).default(0),
	retinaRendering: z.boolean().default(true)
});
/** Durable schema for the whole namespace section. */
const AppearanceSettingsSchema = z.dict(WorkspaceAppearanceSchema).default({});
//#endregion

/** Cordis plugin name (the profile patch row id). */
const name = "dsh-appearance";
/** Settings namespace owned by this plugin (Host user-settings document section). */
const SETTINGS_NAMESPACE = "dsh-appearance";
/** Logical RPC channel owned by this plugin. */
const RPC_CHANNEL = "/dsh-appearance";
/** Host services required by the private, loopback-only settings transport. */
const inject = [
	"settings",
	"connection",
	"webServer"
];
const SETTINGS_NAMESPACE_ID = settingsNamespace(SETTINGS_NAMESPACE);

function record(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function badRequest(message) {
	return {
		ok: false,
		error: {
			code: "bad-request",
			message,
			details: { issues: [] }
		}
	};
}
function internalError(error) {
	return {
		ok: false,
		error: {
			code: "internal",
			message: error instanceof Error ? error.message : String(error),
			details: {}
		}
	};
}

/**
 * Mount the durable settings section and its loopback-only browser transport.
 * The generic settings API intentionally excludes third-party namespaces, so
 * the plugin owns a narrow channel that exposes only this section.
 * @param ctx - host context.
 */
function apply(ctx) {
	const scope = ctx.settings.register(SETTINGS_NAMESPACE_ID, AppearanceSettingsSchema);
	ctx.connection.rpc.handle(RPC_CHANNEL, async (endpoint, payload) => {
		if (endpoint === "settings/describe") return {
			ok: true,
			value: scope.get()
		};
		const input = record(payload);
		if (input === void 0 || typeof input.workspaceId !== "string" || input.workspaceId === "") return badRequest("workspaceId must be a non-empty string");
		const workspaceId = input.workspaceId;
		try {
			if (endpoint === "settings/set") {
				const appearance = WorkspaceAppearanceSchema(input.appearance);
				await ctx.settings.mutate(SETTINGS_NAMESPACE_ID, [{
					op: "set",
					path: [workspaceId],
					value: appearance
				}]);
			} else if (endpoint === "settings/unset") await ctx.settings.mutate(SETTINGS_NAMESPACE_ID, [{
				op: "unset",
				path: [workspaceId]
			}]);
			else return badRequest(`unknown endpoint ${JSON.stringify(endpoint)}`);
			return {
				ok: true,
				value: scope.get()
			};
		} catch (error) {
			return internalError(error);
		}
	}, { authority: "loopback" });
}

export { RPC_CHANNEL, SETTINGS_NAMESPACE, apply, inject, name };
