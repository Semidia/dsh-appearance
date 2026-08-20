window.__ModuleLoader__.load({
	id: "dsh-appearance",
	factory: (require) => {
		/* shared coordinator handle */
		const sharedRef = { refresh: void 0 };
		/* dsh-theme half (theme studio, palettes, typography tokens) */
		const themePart = (() => {

		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
		let react = require("react");
		react = __toESM(react, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region \0dsh-theme-css:/Users/linzhihuang/Desktop/project/dsh-theme/src/client/studio.css.mjs
		const css = "[data-appearance-studio],\n[data-appearance-studio] * {\n  box-sizing: border-box;\n}\n\n[data-appearance-studio] {\n  --appearance-accent: var(--dsw-alias-state-business-primary);\n  --appearance-background: var(--dsw-alias-bg-base);\n  --appearance-surface: var(--dsw-alias-bg-layer-1);\n  --appearance-surface-raised: var(--dsw-alias-bg-layer-2);\n  --appearance-hover: var(--dsw-alias-interactive-bg-hover);\n  --appearance-border: var(--dsw-alias-border-l2);\n  --appearance-border-strong: var(--dsw-alias-border-l3);\n  --appearance-text: var(--dsw-alias-label-primary);\n  --appearance-text-muted: var(--dsw-alias-label-tertiary);\n  display: flex;\n  width: 100%;\n  max-width: 720px;\n  flex-direction: column;\n  gap: 20px;\n  padding-bottom: 24px;\n  color: var(--appearance-text);\n  font-family: var(--dsw-font-family);\n}\n\n[data-appearance-studio] button,\n[data-appearance-studio] input,\n[data-appearance-studio] select {\n  font: inherit;\n}\n\n[data-appearance-header] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n[data-appearance-header] > div {\n  min-width: 0;\n}\n\n[data-appearance-header] h2,\n[data-appearance-subheading] h3 {\n  margin: 0;\n  color: var(--appearance-text);\n  font-weight: 600;\n}\n\n[data-appearance-header] h2 {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n[data-appearance-header] p,\n[data-appearance-subheading] p {\n  margin: 3px 0 0;\n  color: var(--appearance-text-muted);\n}\n\n[data-appearance-header] p {\n  font-size: 14px;\n  line-height: 22px;\n}\n\n[data-appearance-button] {\n  min-height: 34px;\n  padding: 5px 12px;\n  border: 1px solid var(--appearance-border);\n  border-radius: 8px;\n  color: var(--appearance-text);\n  background: var(--appearance-surface);\n  cursor: pointer;\n}\n\n[data-appearance-button]:hover {\n  background: var(--appearance-hover);\n}\n\n[data-appearance-button]:focus-visible,\n[data-appearance-mode]:focus-visible,\n[data-appearance-tabs] button:focus-visible,\n[data-appearance-input]:focus-visible,\n[data-appearance-select]:focus-visible,\n[data-appearance-swatch]:focus-visible {\n  outline: 2px solid var(--appearance-accent);\n  outline-offset: 2px;\n}\n\n[data-appearance-content] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 18px;\n}\n\n[data-appearance-mode-grid] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n[data-appearance-mode] {\n  min-width: 0;\n  border: 1px solid var(--appearance-border);\n  color: var(--appearance-text-muted);\n  background: var(--appearance-surface);\n  cursor: pointer;\n}\n\n[data-appearance-mode]:hover {\n  border-color: var(--appearance-border-strong);\n  background: var(--appearance-hover);\n}\n\n[data-appearance-mode][data-selected=\"true\"] {\n  border-color: var(--appearance-accent);\n  color: var(--appearance-text);\n  box-shadow: 0 0 0 2px\n    color-mix(in oklch, var(--appearance-accent) 18%, transparent);\n}\n\n[data-appearance-mode] {\n  display: flex;\n  height: auto;\n  flex-direction: column;\n  gap: 8px;\n  padding: 7px;\n  border-radius: 10px;\n}\n\n[data-appearance-preview] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  aspect-ratio: 1.8;\n  overflow: hidden;\n  border: 1px solid #0000001f;\n  border-radius: 7px;\n  background: #fff;\n}\n\n[data-appearance-preview][data-mode=\"dark\"] {\n  border-color: #ffffff2e;\n  background: #18181b;\n}\n\n[data-appearance-preview][data-mode=\"system\"] {\n  background: linear-gradient(90deg, #fff 0 50%, #18181b 50%);\n}\n\n[data-appearance-preview-sidebar] {\n  width: 28%;\n  background: #f2f2f3;\n}\n\n[data-mode=\"dark\"] [data-appearance-preview-sidebar] {\n  background: #27272a;\n}\n\n[data-mode=\"system\"] [data-appearance-preview-sidebar] {\n  background: linear-gradient(90deg, #f2f2f3 0 50%, #27272a 50%);\n}\n\n[data-appearance-preview-surface] {\n  position: absolute;\n  right: 8%;\n  bottom: 12%;\n  display: grid;\n  width: 56%;\n  gap: 5px;\n  padding: 8px;\n  border-radius: 6px;\n  background: #f7f7f8;\n  box-shadow: 0 2px 8px #00000017;\n}\n\n[data-mode=\"dark\"] [data-appearance-preview-surface] {\n  background: #303034;\n}\n\n[data-mode=\"system\"] [data-appearance-preview-surface] {\n  background: linear-gradient(90deg, #f7f7f8 0 50%, #303034 50%);\n}\n\n[data-appearance-preview-surface] i {\n  height: 4px;\n  border-radius: 999px;\n  background: #c7c7cc;\n}\n\n[data-appearance-preview-surface] i:nth-child(2) {\n  width: 78%;\n}\n\n[data-appearance-preview-surface] i:nth-child(3) {\n  width: 48%;\n}\n\n[data-appearance-presets],\n[data-appearance-palette],\n[data-appearance-typography] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 10px;\n}\n\n[data-appearance-subheading] h3 {\n  font-size: 14px;\n  line-height: 22px;\n}\n\n[data-appearance-subheading] p {\n  font-size: 12px;\n  line-height: 18px;\n}\n\n[data-appearance-theme-picker] {\n  display: grid;\n  grid-template-columns: minmax(12rem, 16rem) auto;\n  align-items: center;\n  justify-content: start;\n  gap: 12px;\n}\n\n[data-appearance-theme-colors] {\n  display: grid;\n  width: 130px;\n  height: 26px;\n  grid-template-columns: repeat(5, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--appearance-border);\n  border-radius: 7px;\n  background: var(--appearance-surface);\n}\n\n[data-appearance-theme-colors] i {\n  display: block;\n  min-width: 0;\n}\n\n[data-appearance-tabs] {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 3px;\n  border-radius: 8px;\n  background: var(--appearance-surface-raised);\n}\n\n[data-appearance-tabs] button {\n  min-height: 28px;\n  padding: 3px 10px;\n  border: 0;\n  border-radius: 6px;\n  color: var(--appearance-text-muted);\n  background: transparent;\n  cursor: pointer;\n}\n\n[data-appearance-tabs] button[data-selected=\"true\"] {\n  color: var(--appearance-text);\n  background: var(--appearance-surface);\n  box-shadow: 0 1px 3px #00000012;\n}\n\n[data-appearance-fields],\n[data-appearance-setting-list] {\n  display: grid;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid var(--appearance-border);\n  border-radius: 10px;\n  background: var(--appearance-surface);\n}\n\n[data-appearance-fields][hidden] {\n  display: none;\n}\n\n[data-appearance-color-row],\n[data-appearance-setting-row] {\n  display: grid;\n  grid-template-columns: minmax(7rem, 1fr) minmax(10rem, 14rem);\n  align-items: center;\n  min-height: 52px;\n  gap: 12px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--appearance-border);\n}\n\n[data-appearance-color-row]:last-child,\n[data-appearance-setting-row]:last-child {\n  border-bottom: 0;\n}\n\n[data-appearance-color-row] > label,\n[data-appearance-setting-row] > span {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n[data-appearance-color-control] {\n  display: grid;\n  grid-template-columns: 30px minmax(0, 1fr);\n  align-items: center;\n  gap: 8px;\n}\n\n[data-appearance-swatch] {\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid var(--appearance-border);\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n}\n\n[data-appearance-swatch]::-webkit-color-swatch-wrapper {\n  padding: 3px;\n}\n\n[data-appearance-swatch]::-webkit-color-swatch {\n  border: 0;\n  border-radius: 4px;\n}\n\n[data-appearance-input],\n[data-appearance-select] {\n  width: 100%;\n  min-width: 0;\n  height: 34px;\n  border: 1px solid var(--appearance-border);\n  border-radius: 8px;\n  color: var(--appearance-text);\n  background: var(--appearance-background);\n}\n\n[data-appearance-input] {\n  padding: 5px 9px;\n}\n\n[data-appearance-select] {\n  padding: 4px 28px 4px 9px;\n  cursor: pointer;\n}\n\n[data-appearance-input][aria-invalid=\"true\"] {\n  border-color: var(--dsw-alias-state-error-primary);\n}\n\n[data-appearance-field-error] {\n  grid-column: 2;\n  margin-top: -6px;\n  color: var(--dsw-alias-state-error-primary);\n  font-size: 12px;\n}\n\n[data-appearance-status] {\n  min-height: 18px;\n  margin: -7px 2px 0;\n  color: var(--appearance-text-muted);\n  font-size: 12px;\n  line-height: 18px;\n}\n\n[data-appearance-status][data-status=\"error\"] {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  [data-appearance-button],\n  [data-appearance-mode],\n  [data-appearance-tabs] button,\n  [data-appearance-input],\n  [data-appearance-select] {\n    transition:\n      border-color 120ms ease,\n      background-color 120ms ease,\n      color 120ms ease,\n      box-shadow 120ms ease;\n  }\n}\n\n@media (max-width: 620px) {\n  [data-appearance-mode-grid] {\n    grid-template-columns: 1fr;\n  }\n\n  [data-appearance-mode] {\n    display: grid;\n    grid-template-columns: minmax(7rem, 10rem) 1fr;\n    align-items: center;\n  }\n\n  [data-appearance-theme-picker] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n\n  [data-appearance-color-row],\n  [data-appearance-setting-row] {\n    grid-template-columns: 1fr;\n  }\n\n  [data-appearance-field-error] {\n    grid-column: 1;\n  }\n}\n";
		const tagId = "dsh-theme/studio.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-theme";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/theme-settings.ts
		const THEME_COLOR_FIELDS = [
			"lightAccent",
			"lightBackground",
			"lightForeground",
			"lightSurface",
			"lightInlineCode",
			"lightSidebar",
			"darkAccent",
			"darkBackground",
			"darkForeground",
			"darkSurface",
			"darkInlineCode",
			"darkSidebar"
		];
		const LEGACY_THEME_COLOR_FIELDS = [
			"lightAccent",
			"lightBackground",
			"lightForeground",
			"lightSurface",
			"lightSidebar",
			"darkAccent",
			"darkBackground",
			"darkForeground",
			"darkSurface",
			"darkSidebar"
		];
		const UI_FONT_IDS = [
			"system",
			"inter",
			"avenir",
			"rounded",
			"serif"
		];
		const CODE_FONT_IDS = [
			"sf-mono",
			"jetbrains",
			"fira-code",
			"menlo",
			"cascadia"
		];
		const UI_FONT_SIZES = [
			12,
			13,
			14,
			15,
			16
		];
		const CODE_FONT_SIZES = [
			11,
			12,
			13,
			14,
			15
		];
		const THEME_TYPOGRAPHY_FIELDS = [
			"uiFont",
			"codeFont",
			"uiFontSize",
			"codeFontSize"
		];
		[...THEME_COLOR_FIELDS, ...THEME_TYPOGRAPHY_FIELDS];
		const DEFAULT_THEME_STUDIO_SETTINGS = {
			lightAccent: "#0169CC",
			lightBackground: "#FFFFFF",
			lightForeground: "#0D0D0D",
			lightSurface: "#F7F7F7",
			lightInlineCode: "#F0F0F0",
			lightSidebar: "#FFFFFF",
			darkAccent: "#5AA7F2",
			darkBackground: "#111111",
			darkForeground: "#F4F4F4",
			darkSurface: "#1A1A1A",
			darkInlineCode: "#282828",
			darkSidebar: "#111111",
			uiFont: "system",
			codeFont: "sf-mono",
			uiFontSize: 14,
			codeFontSize: 12
		};
		const HEX_COLOR = /^#[\dA-F]{6}$/i;
		function isHexColor(value) {
			return typeof value === "string" && HEX_COLOR.test(value);
		}
		function isOneOf(value, candidates) {
			return candidates.includes(value);
		}
		function mixHex(foreground, foregroundWeight, background) {
			const channels = (value) => [
				1,
				3,
				5
			].map((start) => Number.parseInt(value.slice(start, start + 2), 16));
			const foregroundChannels = channels(foreground);
			const backgroundChannels = channels(background);
			return `#${foregroundChannels.map((channel, index) => Math.round(channel * foregroundWeight + backgroundChannels[index] * (1 - foregroundWeight)).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
		}
		function decodeThemeStudioSettings(section) {
			if (section === null || typeof section !== "object") return void 0;
			const record = section;
			for (const field of LEGACY_THEME_COLOR_FIELDS) if (!isHexColor(record[field])) return void 0;
			for (const field of THEME_COLOR_FIELDS) if (record[field] !== void 0 && !isHexColor(record[field])) return;
			const legacyInlineCode = {
				lightInlineCode: mixHex(record.lightForeground, .06, record.lightBackground),
				darkInlineCode: mixHex(record.darkForeground, .1, record.darkBackground)
			};
			return {
				...Object.fromEntries(THEME_COLOR_FIELDS.map((field) => {
					const fallback = field === "lightInlineCode" || field === "darkInlineCode" ? legacyInlineCode[field] : DEFAULT_THEME_STUDIO_SETTINGS[field];
					return [field, isHexColor(record[field]) ? record[field] : fallback];
				})),
				uiFont: isOneOf(record.uiFont, UI_FONT_IDS) ? record.uiFont : DEFAULT_THEME_STUDIO_SETTINGS.uiFont,
				codeFont: isOneOf(record.codeFont, CODE_FONT_IDS) ? record.codeFont : DEFAULT_THEME_STUDIO_SETTINGS.codeFont,
				uiFontSize: isOneOf(record.uiFontSize, UI_FONT_SIZES) ? record.uiFontSize : DEFAULT_THEME_STUDIO_SETTINGS.uiFontSize,
				codeFontSize: isOneOf(record.codeFontSize, CODE_FONT_SIZES) ? record.codeFontSize : DEFAULT_THEME_STUDIO_SETTINGS.codeFontSize
			};
		}
		//#endregion
		//#region src/client/locales.ts
		const NS = "dsh.theme";
		const zh = {
			nav: "外观",
			title: "外观",
			description: "实时调整界面配色、字体与字号",
			"mode.system": "跟随系统",
			"mode.light": "浅色",
			"mode.dark": "深色",
			"preset.title": "主题",
			"preset.description": "选择后可继续调整具体颜色，修改会立即生效",
			"preset.custom": "自定义",
			"preset.codex": "清透蓝",
			"preset.proof": "暖纸绿",
			"preset.everforest": "森林绿",
			"preset.github": "冷白蓝",
			"preset.gruvbox": "暖砂棕",
			"preset.linear": "冷灰紫",
			"preset.notion": "柔和灰",
			"preset.raycast": "高对比蓝",
			"preset.rosePine": "玫瑰雾",
			"palette.light": "浅色配色",
			"palette.dark": "深色配色",
			"color.accent": "强调色",
			"color.background": "背景色",
			"color.foreground": "文字色",
			"color.surface": "表面色",
			"color.inlineCode": "行内代码背景",
			"color.sidebar": "侧栏色",
			"typography.title": "字体与字号",
			"typography.description": "未安装的字体会自动使用后备字体",
			"typography.uiFont": "界面字体",
			"typography.codeFont": "代码字体",
			"typography.uiFontSize": "界面字号",
			"typography.codeFontSize": "代码字号",
			"font.system": "系统默认",
			"font.inter": "Inter",
			"font.avenir": "Avenir Next",
			"font.rounded": "圆体",
			"font.serif": "衬线体",
			"font.sf-mono": "SF Mono",
			"font.jetbrains": "JetBrains Mono",
			"font.fira-code": "Fira Code",
			"font.menlo": "Menlo",
			"font.cascadia": "Cascadia Code",
			"status.saving": "正在保存…",
			"status.saved": "已实时应用",
			"status.error": "浏览器无法保存，当前预览仍有效",
			"action.reset": "恢复默认",
			"input.invalid": "请输入 6 位十六进制色值"
		};
		const en = {
			nav: "Appearance",
			title: "Appearance",
			description: "Tune interface colors, fonts, and type sizes live",
			"mode.system": "System",
			"mode.light": "Light",
			"mode.dark": "Dark",
			"preset.title": "Themes",
			"preset.description": "Choose a starting point, then tune any color live",
			"preset.custom": "Custom",
			"preset.codex": "Clear Blue",
			"preset.proof": "Paper Green",
			"preset.everforest": "Forest Green",
			"preset.github": "Cool White",
			"preset.gruvbox": "Warm Sand",
			"preset.linear": "Cool Violet",
			"preset.notion": "Soft Gray",
			"preset.raycast": "High Contrast",
			"preset.rosePine": "Rose Mist",
			"palette.light": "Light palette",
			"palette.dark": "Dark palette",
			"color.accent": "Accent",
			"color.background": "Background",
			"color.foreground": "Foreground",
			"color.surface": "Surface",
			"color.inlineCode": "Inline code background",
			"color.sidebar": "Sidebar",
			"typography.title": "Fonts and sizes",
			"typography.description": "Unavailable fonts automatically use fallbacks",
			"typography.uiFont": "Interface font",
			"typography.codeFont": "Code font",
			"typography.uiFontSize": "Interface size",
			"typography.codeFontSize": "Code size",
			"font.system": "System default",
			"font.inter": "Inter",
			"font.avenir": "Avenir Next",
			"font.rounded": "Rounded",
			"font.serif": "Serif",
			"font.sf-mono": "SF Mono",
			"font.jetbrains": "JetBrains Mono",
			"font.fira-code": "Fira Code",
			"font.menlo": "Menlo",
			"font.cascadia": "Cascadia Code",
			"status.saving": "Saving…",
			"status.saved": "Applied live",
			"status.error": "Browser storage is unavailable; preview remains active",
			"action.reset": "Reset",
			"input.invalid": "Enter a six-digit hex color"
		};
		//#endregion
		//#region src/client/persistence.ts
		const THEME_STUDIO_STORAGE_KEY = "dsh-theme/settings/v1";
		function browserThemeStudioStorage() {
			try {
				return globalThis.localStorage;
			} catch {
				return;
			}
		}
		function loadThemeStudioSettings(storage) {
			if (storage === void 0) return { ...DEFAULT_THEME_STUDIO_SETTINGS };
			try {
				const raw = storage.getItem(THEME_STUDIO_STORAGE_KEY);
				if (raw === null) return { ...DEFAULT_THEME_STUDIO_SETTINGS };
				return decodeThemeStudioSettings(JSON.parse(raw)) ?? { ...DEFAULT_THEME_STUDIO_SETTINGS };
			} catch {
				return { ...DEFAULT_THEME_STUDIO_SETTINGS };
			}
		}
		function saveThemeStudioSettings(storage, settings) {
			if (storage === void 0) return false;
			try {
				storage.setItem(THEME_STUDIO_STORAGE_KEY, JSON.stringify(settings));
				return true;
			} catch {
				return false;
			}
		}
		//#endregion
		//#region src/client/presets.ts
		const THEME_PRESETS = [
			{
				id: "codex",
				palette: {
					lightAccent: "#0169CC",
					lightBackground: "#FFFFFF",
					lightForeground: "#0D0D0D",
					lightSurface: "#F7F7F7",
					lightInlineCode: "#F0F0F0",
					lightSidebar: "#FFFFFF",
					darkAccent: "#5AA7F2",
					darkBackground: "#111111",
					darkForeground: "#F4F4F4",
					darkSurface: "#1A1A1A",
					darkInlineCode: "#282828",
					darkSidebar: "#111111"
				}
			},
			{
				id: "proof",
				palette: {
					lightAccent: "#3D755D",
					lightBackground: "#FAF9F6",
					lightForeground: "#292D29",
					lightSurface: "#FFFFFF",
					lightInlineCode: "#EDEDEA",
					lightSidebar: "#FAF9F6",
					darkAccent: "#83B69D",
					darkBackground: "#171A17",
					darkForeground: "#E8EBE6",
					darkSurface: "#222622",
					darkInlineCode: "#2C2F2C",
					darkSidebar: "#171A17"
				}
			},
			{
				id: "everforest",
				palette: {
					lightAccent: "#4E713F",
					lightBackground: "#F8FAF6",
					lightForeground: "#303A32",
					lightSurface: "#FFFFFF",
					lightInlineCode: "#ECEEEA",
					lightSidebar: "#F8FAF6",
					darkAccent: "#A7C080",
					darkBackground: "#181C1A",
					darkForeground: "#E1E5DC",
					darkSurface: "#222724",
					darkInlineCode: "#2C302D",
					darkSidebar: "#181C1A"
				}
			},
			{
				id: "github",
				palette: {
					lightAccent: "#0969DA",
					lightBackground: "#FFFFFF",
					lightForeground: "#1F2328",
					lightSurface: "#F6F8FA",
					lightInlineCode: "#F2F2F2",
					lightSidebar: "#FFFFFF",
					darkAccent: "#58A6FF",
					darkBackground: "#0D1117",
					darkForeground: "#E6EDF3",
					darkSurface: "#161B22",
					darkInlineCode: "#23272D",
					darkSidebar: "#0D1117"
				}
			},
			{
				id: "gruvbox",
				palette: {
					lightAccent: "#8F4F18",
					lightBackground: "#FAF8F1",
					lightForeground: "#352F2B",
					lightSurface: "#FFFFFF",
					lightInlineCode: "#EEECE5",
					lightSidebar: "#FAF8F1",
					darkAccent: "#D7995B",
					darkBackground: "#1F1F1D",
					darkForeground: "#F2E6C9",
					darkSurface: "#2A2926",
					darkInlineCode: "#34332E",
					darkSidebar: "#1F1F1D"
				}
			},
			{
				id: "linear",
				palette: {
					lightAccent: "#5864C7",
					lightBackground: "#FFFFFF",
					lightForeground: "#252A35",
					lightSurface: "#F6F7FA",
					lightInlineCode: "#F2F2F3",
					lightSidebar: "#FFFFFF",
					darkAccent: "#8C97FF",
					darkBackground: "#15161B",
					darkForeground: "#E6E9EF",
					darkSurface: "#202127",
					darkInlineCode: "#2A2B30",
					darkSidebar: "#15161B"
				}
			},
			{
				id: "notion",
				palette: {
					lightAccent: "#1969AA",
					lightBackground: "#FFFFFF",
					lightForeground: "#37352F",
					lightSurface: "#F7F7F5",
					lightInlineCode: "#F3F3F3",
					lightSidebar: "#FFFFFF",
					darkAccent: "#5A9DDE",
					darkBackground: "#191919",
					darkForeground: "#E5E5E4",
					darkSurface: "#242424",
					darkInlineCode: "#2D2D2D",
					darkSidebar: "#191919"
				}
			},
			{
				id: "raycast",
				palette: {
					lightAccent: "#0A6BC0",
					lightBackground: "#FFFFFF",
					lightForeground: "#181818",
					lightSurface: "#F7F7F7",
					lightInlineCode: "#F1F1F1",
					lightSidebar: "#FFFFFF",
					darkAccent: "#4FA3F8",
					darkBackground: "#141414",
					darkForeground: "#F2F2F2",
					darkSurface: "#1F1F1F",
					darkInlineCode: "#2A2A2A",
					darkSidebar: "#141414"
				}
			},
			{
				id: "rosePine",
				palette: {
					lightAccent: "#A14F5D",
					lightBackground: "#FAF8F7",
					lightForeground: "#433E5D",
					lightSurface: "#FFFFFF",
					lightInlineCode: "#EFEDEE",
					lightSidebar: "#FAF8F7",
					darkAccent: "#EA9A97",
					darkBackground: "#201E2C",
					darkForeground: "#E0DEF4",
					darkSurface: "#2A2738",
					darkInlineCode: "#333140",
					darkSidebar: "#201E2C"
				}
			}
		];
		function getThemePreset(id) {
			const preset = THEME_PRESETS.find((candidate) => candidate.id === id);
			if (preset === void 0) throw new Error(`Unknown theme preset: ${id}`);
			return preset;
		}
		function themePresetIdOf(settings) {
			return THEME_PRESETS.find((preset) => Object.entries(preset.palette).every(([field, value]) => settings[field].toUpperCase() === value))?.id;
		}
		//#endregion
		//#region src/client/store.ts
		function createThemeStudioStore(initialSettings = DEFAULT_THEME_STUDIO_SETTINGS) {
			return (0, _deepseek_ai_dsh_client_runtime_client.defineStore)({
				init: () => ({
					activeScheme: "light",
					preference: "system",
					saveStatus: "idle",
					settings: { ...initialSettings }
				}),
				actions: {
					syncSettings: (draft, settings) => {
						draft.settings = { ...settings };
					},
					syncTheme: (draft, preference, activeScheme) => {
						draft.preference = preference;
						draft.activeScheme = activeScheme;
					},
					setSaveStatus: (draft, status) => {
						draft.saveStatus = status;
					}
				}
			});
		}
		//#endregion
		//#region src/client/ThemeStudio.tsx
		const COLOR_ROWS = [
			["accent", "color.accent"],
			["background", "color.background"],
			["foreground", "color.foreground"],
			["surface", "color.surface"],
			["inlineCode", "color.inlineCode"],
			["sidebar", "color.sidebar"]
		];
		const MODE_OPTIONS = [
			"system",
			"light",
			"dark"
		];
		function ColorField({ field, invalidMessage, label, onChange, value }) {
			const [draft, setDraft] = react.useState(value);
			const valid = isHexColor(draft);
			react.useEffect(() => setDraft(value), [value]);
			const commit = (next) => {
				const normalized = next.toUpperCase();
				setDraft(normalized);
				if (isHexColor(normalized)) onChange(field, normalized);
			};
			const inputId = `appearance-${field}`;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				"data-appearance-color-row": true,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
						htmlFor: inputId,
						children: label
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						"data-appearance-color-control": true,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							"aria-label": `${label} color picker`,
							"data-appearance-swatch": true,
							type: "color",
							value,
							onChange: (event) => commit(event.currentTarget.value)
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							id: inputId,
							"aria-describedby": valid ? void 0 : `${inputId}-error`,
							"aria-invalid": !valid,
							autoComplete: "off",
							"data-appearance-input": true,
							inputMode: "text",
							maxLength: 7,
							pattern: "#[0-9A-Fa-f]{6}",
							spellCheck: false,
							value: draft,
							onBlur: () => {
								if (!valid) setDraft(value);
							},
							onChange: (event) => commit(event.currentTarget.value)
						})]
					}),
					!valid && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						id: `${inputId}-error`,
						"data-appearance-field-error": true,
						children: invalidMessage
					})
				]
			});
		}
		function SettingSelect({ label, onChange, options, value }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				"data-appearance-setting-row": true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
					"data-appearance-select": true,
					value,
					onChange: (event) => onChange(event.currentTarget.value),
					children: options.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
						value: option.value,
						children: option.label
					}, option.value))
				})]
			});
		}
		function ModePreview({ mode }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				"aria-hidden": "true",
				"data-appearance-preview": true,
				"data-mode": mode,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { "data-appearance-preview-sidebar": true }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					"data-appearance-preview-surface": true,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {})
					]
				})]
			});
		}
		function PalettePreview({ mode, settings }) {
			const prefix = mode === "light" ? "light" : "dark";
			const colors = [
				settings[`${prefix}Accent`],
				settings[`${prefix}Background`],
				settings[`${prefix}Foreground`],
				settings[`${prefix}Surface`],
				settings[`${prefix}InlineCode`]
			];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				"data-appearance-theme-colors": true,
				children: colors.map((color, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", { style: { backgroundColor: color } }, `${color}-${index}`))
			});
		}
		function ThemeStudio({ applyPreset, resetTheme, setColor, setTheme, setTypography, t, useStore }) {
			const activeScheme = useStore((state) => state.activeScheme);
			const preference = useStore((state) => state.preference);
			const saveStatus = useStore((state) => state.saveStatus);
			const settings = useStore((state) => state.settings);
			const activePreset = themePresetIdOf(settings);
			const [paletteMode, setPaletteMode] = react.useState(activeScheme);
			const uiFontOptions = UI_FONT_IDS.map((value) => ({
				value,
				label: t(`font.${value}`)
			}));
			const codeFontOptions = CODE_FONT_IDS.map((value) => ({
				value,
				label: t(`font.${value}`)
			}));
			const uiSizeOptions = UI_FONT_SIZES.map((value) => ({
				value: String(value),
				label: `${value} px`
			}));
			const codeSizeOptions = CODE_FONT_SIZES.map((value) => ({
				value: String(value),
				label: `${value} px`
			}));
			const statusText = saveStatus === "saving" ? t("status.saving") : saveStatus === "error" ? t("status.error") : t("status.saved");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				"data-appearance-studio": true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
					"data-appearance-header": true,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("title") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("description") })] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						"data-appearance-button": true,
						"data-variant": "secondary",
						type: "button",
						onClick: resetTheme,
						children: t("action.reset")
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					"data-appearance-content": true,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							"data-appearance-mode-grid": true,
							children: MODE_OPTIONS.map((mode) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								"aria-pressed": preference === mode,
								"data-appearance-mode": true,
								"data-selected": preference === mode ? "true" : "false",
								type: "button",
								onClick: () => setTheme(mode),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModePreview, { mode }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t(`mode.${mode}`) })]
							}, mode))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							"data-appearance-presets": true,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								"data-appearance-subheading": true,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: t("preset.title") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("preset.description") })]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								"data-appearance-theme-picker": true,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
									"aria-label": t("preset.title"),
									"data-appearance-select": true,
									value: activePreset ?? "",
									onChange: (event) => {
										const id = event.currentTarget.value;
										if (id !== "") applyPreset(id);
									},
									children: [activePreset === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "",
										children: t("preset.custom")
									}), THEME_PRESETS.map((preset) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: preset.id,
										children: t(`preset.${preset.id}`)
									}, preset.id))]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PalettePreview, {
									mode: activeScheme,
									settings
								})]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							"data-appearance-palette": true,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								"aria-label": t("preset.title"),
								"data-appearance-tabs": true,
								role: "tablist",
								children: ["light", "dark"].map((mode) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									"aria-selected": paletteMode === mode,
									"data-selected": paletteMode === mode ? "true" : "false",
									role: "tab",
									type: "button",
									onClick: () => setPaletteMode(mode),
									children: t(`palette.${mode}`)
								}, mode))
							}), ["light", "dark"].map((mode) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								"data-appearance-fields": true,
								hidden: paletteMode !== mode,
								role: "tabpanel",
								children: COLOR_ROWS.map(([suffix, labelKey]) => {
									const field = `${mode}${suffix[0]?.toUpperCase()}${suffix.slice(1)}`;
									return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ColorField, {
										field,
										invalidMessage: t("input.invalid"),
										label: t(labelKey),
										value: settings[field],
										onChange: setColor
									}, field);
								})
							}, mode))]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							"data-appearance-typography": true,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								"data-appearance-subheading": true,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: t("typography.title") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("typography.description") })]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								"data-appearance-setting-list": true,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingSelect, {
										label: t("typography.uiFont"),
										options: uiFontOptions,
										value: settings.uiFont,
										onChange: (value) => setTypography("uiFont", value)
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingSelect, {
										label: t("typography.codeFont"),
										options: codeFontOptions,
										value: settings.codeFont,
										onChange: (value) => setTypography("codeFont", value)
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingSelect, {
										label: t("typography.uiFontSize"),
										options: uiSizeOptions,
										value: String(settings.uiFontSize),
										onChange: (value) => setTypography("uiFontSize", Number(value))
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingSelect, {
										label: t("typography.codeFontSize"),
										options: codeSizeOptions,
										value: String(settings.codeFontSize),
										onChange: (value) => setTypography("codeFontSize", Number(value))
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							"aria-live": "polite",
							"data-appearance-status": true,
							"data-status": saveStatus,
							children: statusText
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/theme-tokens.ts
		const UI_FONT_STACKS = {
			system: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", Arial, sans-serif",
			inter: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", Arial, sans-serif",
			avenir: "\"Avenir Next\", Avenir, -apple-system, BlinkMacSystemFont, \"PingFang SC\", \"Microsoft YaHei\", sans-serif",
			rounded: "\"SF Pro Rounded\", \"Nunito Sans\", -apple-system, BlinkMacSystemFont, \"PingFang SC\", \"Microsoft YaHei\", sans-serif",
			serif: "\"Iowan Old Style\", \"Songti SC\", \"Noto Serif CJK SC\", Georgia, serif"
		};
		const CODE_FONT_STACKS = {
			"sf-mono": "\"SF Mono\", \"JetBrains Mono\", \"Fira Code\", Consolas, \"Liberation Mono\", monospace",
			jetbrains: "\"JetBrains Mono\", \"SF Mono\", \"Fira Code\", Consolas, \"Liberation Mono\", monospace",
			"fira-code": "\"Fira Code\", \"SF Mono\", \"JetBrains Mono\", Consolas, \"Liberation Mono\", monospace",
			menlo: "Menlo, Monaco, \"SF Mono\", Consolas, \"Liberation Mono\", monospace",
			cascadia: "\"Cascadia Code\", \"SF Mono\", Consolas, \"Liberation Mono\", monospace"
		};
		function same(value) {
			return {
				light: value,
				dark: value
			};
		}
		function scaled(value, delta) {
			return Math.max(9, value + delta);
		}
		function font(size, lineHeight, delta, family, weight, style) {
			return [
				style,
				weight,
				`${scaled(size, delta)}px/${scaled(lineHeight, delta)}px`,
				family
			].filter((part) => part !== void 0).join(" ");
		}
		function typography(settings) {
			const uiDelta = settings.uiFontSize - 14;
			const codeDelta = settings.codeFontSize - 12;
			const uiFamily = UI_FONT_STACKS[settings.uiFont];
			const codeFamily = CODE_FONT_STACKS[settings.codeFont];
			const ui = (size, lineHeight, weight, style) => same(font(size, lineHeight, uiDelta, "var(--dsw-font-family)", weight, style));
			const code = (size, lineHeight) => same(font(size, lineHeight, codeDelta, "var(--ds-font-family-code)"));
			return {
				"--dsw-font-family": same(uiFamily),
				"--ds-font-family-code": same(codeFamily),
				"--dsw-font-mono": same(codeFamily),
				"--dsw-font-xl-24": ui(24, 32, 600),
				"--dsw-font-l-20": ui(20, 28, 500),
				"--dsw-font-m-18": ui(16, 28, 500),
				"--dsw-font-base-16": ui(16, 24),
				"--dsw-font-base-strong-16": ui(16, 24, 500),
				"--dsw-font-s-14": ui(14, 22),
				"--dsw-font-s-strong-14": ui(14, 22, 500),
				"--dsw-font-xs-13": ui(13, 20),
				"--dsw-font-xs-strong-13": ui(13, 20, 500),
				"--dsw-font-xxs-12": ui(12, 18),
				"--dsw-font-xxs-strong-12": ui(12, 18, 500),
				"--dsw-font-xxxs-11": ui(11, 14),
				"--dsw-font-xxxs-strong-11": ui(11, 14, 500),
				/* Coordinated: markdown body typography is owned exclusively by the
				   per-workspace appearance presenter (dsh-custom-workspace half).
				   Removing the --dsw-font-markdown-* overrides here guarantees a
				   single source of truth for body font size: workspace settings win,
				   unset fields fall back to the official default (16px/28px). */
				"--dsw-font-markdown-code": code(14, 22),
				"--dsw-font-markdown-code-block": code(13, 22),
				"--dsw-font-markdown-code-block-small": code(12, 18)
			};
		}
		function palette(settings, mode) {
			const prefix = mode === "light" ? "light" : "dark";
			return {
				accent: settings[`${prefix}Accent`],
				background: settings[`${prefix}Background`],
				foreground: settings[`${prefix}Foreground`],
				surface: settings[`${prefix}Surface`],
				inlineCode: settings[`${prefix}InlineCode`],
				sidebar: settings[`${prefix}Sidebar`]
			};
		}
		function mix(first, amount, second) {
			return `color-mix(in oklch, ${first} ${amount}%, ${second})`;
		}
		function buildThemeTokenOverrides(settings) {
			const light = palette(settings, "light");
			const dark = palette(settings, "dark");
			const pair = (getValue) => ({
				light: getValue(light),
				dark: getValue(dark)
			});
			return {
				...typography(settings),
				"--dsw-alias-bg-base": pair((colors) => colors.background),
				"--dsw-alias-bg-layer-1": pair((colors) => colors.surface),
				"--dsw-alias-bg-layer-2": pair((colors) => mix(colors.foreground, 5, colors.surface)),
				"--dsw-alias-bg-layer-3": pair((colors) => mix(colors.foreground, 8, colors.surface)),
				"--dsw-alias-bg-module-platform": pair((colors) => mix(colors.foreground, 5, colors.surface)),
				"--dsw-alias-bg-overlay": pair((colors) => colors.surface),
				"--dsw-alias-border-l1": pair((colors) => mix(colors.foreground, 14, colors.background)),
				"--dsw-alias-border-l2": pair((colors) => mix(colors.foreground, 22, colors.background)),
				"--dsw-alias-border-l3": pair((colors) => mix(colors.foreground, 28, colors.background)),
				"--dsw-alias-border-l4": pair((colors) => mix(colors.foreground, 36, colors.background)),
				"--dsw-alias-brand-primary": pair((colors) => colors.accent),
				"--dsw-alias-button-info-fill": pair((colors) => colors.accent),
				"--dsw-alias-button-info-hover": {
					light: mix(light.accent, 86, light.foreground),
					dark: mix(dark.accent, 82, dark.background)
				},
				"--dsw-alias-label-primary": pair((colors) => colors.foreground),
				"--dsw-alias-label-secondary": pair((colors) => mix(colors.foreground, 62, colors.background)),
				"--dsw-alias-label-tertiary": pair((colors) => mix(colors.foreground, 50, colors.background)),
				"--dsw-alias-label-caption": pair((colors) => mix(colors.foreground, 40, colors.background)),
				"--dsw-alias-label-dimmed": pair((colors) => mix(colors.foreground, 28, colors.background)),
				"--dsw-alias-markdown-inline-code": pair((colors) => colors.inlineCode),
				"--dsw-alias-state-business-primary": pair((colors) => colors.accent),
				"--dsw-alias-state-business-tertiary": pair((colors) => mix(colors.accent, 12, colors.background)),
				"--dsw-alias-interactive-bg-hover": pair((colors) => mix(colors.foreground, 6, colors.background)),
				"--dsw-alias-interactive-bg-hover-solid": pair((colors) => mix(colors.foreground, 6, colors.surface)),
				"--dsw-alias-interactive-bg-hover-accent": pair((colors) => mix(colors.foreground, 14, colors.background)),
				"--dsw-alias-interactive-bg-active": pair((colors) => mix(colors.foreground, 10, colors.background)),
				"--dsw-specific-sidebar-fill": pair((colors) => colors.sidebar),
				"--dsw-specific-sidebar-nav-item-active-accent": pair((colors) => mix(colors.accent, 12, colors.sidebar)),
				"--dsw-specific-sidebar-nav-item-active": pair((colors) => mix(colors.foreground, 10, colors.sidebar)),
				"--dsw-specific-sidebar-nav-item-hover": pair((colors) => mix(colors.foreground, 6, colors.sidebar)),
				"--dsw-specific-bubble": pair((colors) => mix(colors.accent, 10, colors.background)),
				"--dsw-specific-bubble-highlight": pair((colors) => mix(colors.accent, 20, colors.background)),
				"--dsw-static-deepseek-500": pair((colors) => colors.accent),
				"--dsw-static-deepseek-200": pair((colors) => mix(colors.accent, 36, colors.background))
			};
		}
		//#endregion
		//#region src/client/index.tsx
		const THEME_SOURCE = "dsh-theme";
		const inject = [
			"slots",
			"locale",
			"theme"
		];
		function apply(ctx) {
			const storage = browserThemeStudioStorage();
			let currentSettings = loadThemeStudioSettings(storage);
			const store = createThemeStudioStore(currentSettings);
			let actions;
			let releaseOverride = () => {};
			const syncStore = () => {
				actions?.syncSettings(currentSettings);
			};
			const applyPreview = () => {
				const nextRelease = ctx.theme.overrideTokens(THEME_SOURCE, buildThemeTokenOverrides(currentSettings));
				releaseOverride();
				releaseOverride = nextRelease;
			};
			const persist = () => {
				actions?.setSaveStatus("saving");
				actions?.setSaveStatus(saveThemeStudioSettings(storage, currentSettings) ? "idle" : "error");
			};
			const setSetting = (field, value) => {
				currentSettings = {
					...currentSettings,
					[field]: value
				};
				syncStore();
				applyPreview();
				persist();
			};
			const setColor = (field, value) => {
				setSetting(field, value);
			};
			const setTypography = (field, value) => {
				setSetting(field, value);
			};
			const applySettings = (settings) => {
				currentSettings = { ...settings };
				syncStore();
				applyPreview();
				persist();
			};
			const applyPreset = (id) => {
				applySettings({
					...currentSettings,
					...getThemePreset(id).palette
				});
			};
			const resetTheme = () => {
				applySettings(DEFAULT_THEME_STUDIO_SETTINGS);
			};
			const syncTheme = (snapshot) => {
				actions?.syncTheme(snapshot.preference, snapshot.active.colorScheme);
			};
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "dsh-theme: dictionaries");
			ctx.on("theme/change", syncTheme);
			ctx.effect(() => {
				applyPreview();
				return () => {
					releaseOverride();
				};
			}, "dsh-theme: live theme override");
			const injectProps = (bound) => {
				actions = bound;
				syncStore();
				const snapshot = ctx.theme.getTheme();
				syncTheme(snapshot);
				return {
					applyPreset,
					resetTheme,
					setColor,
					setTypography,
					setTheme: (preference) => ctx.theme.setTheme(preference)
				};
			};
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "dsh-theme",
				order: 5,
				label: () => ctx.locale.bind(NS)("nav"),
				store,
				locale: NS,
				inject: injectProps
			}, ThemeStudio));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
		})();
		/* dsh-custom-workspace half (per-workspace appearance presenter) */
		const workspacePart = (() => {

		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_dom_client = require("react-dom/client");
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/appearance.ts
		/** Logical RPC channel owned by this plugin. */
		const RPC_CHANNEL = "/dsh-appearance";
		/** The fully-default appearance (everything inherits the theme). */
		function emptyAppearance() {
			return {
				background: "",
				backgroundImage: "",
				fontSize: 0,
				lineHeight: 0,
				paragraphSpacing: 0,
				retinaRendering: true
			};
		}
		//#endregion
		//#region src/client/presenter.ts
		/** Body attribute carrying the active workspace id ('' when none). */
		const WORKSPACE_ATTR = "data-cw-workspace";
		/** Body attribute carrying the retina rendering state ('on' | 'off'). */
		const RETINA_ATTR = "data-cw-retina";
		/** Body attribute enabling custom Markdown block spacing. */
		const SPACING_ATTR = "data-cw-spacing";
		/** Inline CSS variable for the paragraph margin-block. */
		const PARAGRAPH_VAR = "--cw-paragraph-spacing";
		/** Inline CSS variable matching the active Markdown body line height. */
		const LINE_HEIGHT_VAR = "--cw-line-height";
		/** The theme token the app frame's main surface background consumes. */
		const BG_VAR = "--dsw-alias-bg-base";
		/** Markdown typography tokens overridden per workspace (shorthand + size/line longhands). */
		const FONT_VARS = [
			"--dsw-font-markdown-base",
			"--dsw-font-markdown-base-font-size",
			"--dsw-font-markdown-base-line-height",
			"--dsw-font-markdown-base-strong",
			"--dsw-font-markdown-base-strong-font-size",
			"--dsw-font-markdown-base-strong-line-height",
			"--dsw-font-markdown-base-italic",
			"--dsw-font-markdown-base-italic-font-size",
			"--dsw-font-markdown-base-italic-line-height",
			"--dsw-font-markdown-base-strong-italic",
			"--dsw-font-markdown-base-strong-italic-font-size",
			"--dsw-font-markdown-base-strong-italic-line-height"
		];
		/** Static rules injected once per fiber; dynamic values ride inline variables/attributes. */
		const STYLE_SHEET = `
body[data-cw-retina='on'] {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body[data-cw-retina='off'] {
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  text-rendering: auto;
}
body[${SPACING_ATTR}='on'] [data-slot='conversation.chat.node']
  :where(p, ul, ol, blockquote, pre, h1, h2, h3, h4, h5, h6, hr) {
  margin-block: var(${PARAGRAPH_VAR});
}
body[${SPACING_ATTR}='on'] [data-slot='conversation.chat.node'] li:not(:first-child) {
  margin-top: var(${PARAGRAPH_VAR});
}
body[data-cw-workspace] [data-slot='conversation.chat.node'] li::marker {
  line-height: var(${LINE_HEIGHT_VAR}, 28px);
}
.cw-row-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 2px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--dsw-alias-label-primary);
  font: 14px/22px var(--dsw-font-family);
  text-align: start;
}
.cw-row-button:hover {
  color: var(--dsw-alias-state-business-primary);
}
.cw-row-button .cw-row-arrow {
  color: var(--dsw-alias-label-tertiary);
}
.cw-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
}
.cw-dialog {
  width: 440px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 64px);
  overflow: auto;
  border-radius: 12px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
  font: 14px/22px var(--dsw-font-family);
}
.cw-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}
.cw-title {
  font-size: 15px;
  font-weight: 600;
}
.cw-close {
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  color: var(--dsw-alias-label-secondary);
  font-size: 18px;
  line-height: 1;
}
.cw-close:hover {
  background: var(--dsw-alias-bg-layer-2);
}
.cw-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 16px;
}
.cw-ws-label {
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
}
.cw-ws-select {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
}
.cw-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cw-label {
  font-weight: 500;
}
.cw-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cw-input {
  flex: 1;
  min-width: 0;
  padding: 5px 8px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
}
.cw-color {
  width: 40px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  background: none;
  cursor: pointer;
}
.cw-range {
  flex: 1;
}
.cw-value {
  min-width: 44px;
  text-align: end;
  color: var(--dsw-alias-label-secondary);
}
.cw-check {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cw-hint {
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
}
.cw-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid var(--dsw-alias-border-l2);
}
.cw-btn {
  padding: 6px 14px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  cursor: pointer;
  font: inherit;
}
.cw-btn:hover {
  background: var(--dsw-alias-bg-layer-2);
}
`;
		/** Derive the line height that keeps the theme's 16/28 ratio for a custom size. */
		function lineHeightFor(size) {
			return Math.round(size * (28 / 16));
		}
		/**
		* One presenter instance per plugin fiber; DOM writes are retractable.
		*/
		var WorkspacePresenter = class {
			styleTag = null;
			appliedVars = /* @__PURE__ */ new Set();
			/** Inject the static stylesheet once. */
			mount() {
				if (this.styleTag !== null) return;
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-custom-workspace";
				tag.dataset.pluginCss = "dsh-custom-workspace/styles";
				tag.textContent = STYLE_SHEET;
				document.head.appendChild(tag);
				this.styleTag = tag;
			}
			/**
			* Project one workspace's appearance onto the document. A workspace without
			* a stored entry applies the schema defaults (retina on, everything else
			* inherited); with no active workspace every previous write is retracted.
			* @param workspaceId - active workspace id, or undefined when none.
			* @param appearance - the workspace's stored appearance, or undefined for schema defaults.
			*/
			apply(workspaceId, appearance) {
				const body = document.body;
				if (workspaceId === void 0) {
					this.retract();
					return;
				}
				const a = appearance ?? emptyAppearance();
				body.setAttribute(WORKSPACE_ATTR, workspaceId);
				body.setAttribute(RETINA_ATTR, a.retinaRendering ? "on" : "off");
				if (a.paragraphSpacing > 0) {
					body.setAttribute(SPACING_ATTR, "on");
					this.setVar(PARAGRAPH_VAR, `${a.paragraphSpacing}px`);
				} else {
					body.removeAttribute(SPACING_ATTR);
					this.removeVar(PARAGRAPH_VAR);
				}
				const background = this.composeBackground(a);
				if (background !== void 0) this.setVar(BG_VAR, background);
				else this.removeVar(BG_VAR);
				if (a.fontSize > 0 || a.lineHeight > 0) {
					const size = a.fontSize > 0 ? a.fontSize : 16;
					const line = a.lineHeight > 0 ? a.lineHeight : lineHeightFor(size);
					const baseSize = a.fontSize > 0 ? `${a.fontSize}px` : "var(--dsw-font-markdown-base-font-size)";
					const strongSize = a.fontSize > 0 ? `${a.fontSize}px` : "var(--dsw-font-markdown-base-strong-font-size)";
					const italicSize = a.fontSize > 0 ? `${a.fontSize}px` : "var(--dsw-font-markdown-base-italic-font-size)";
					const strongItalicSize = a.fontSize > 0 ? `${a.fontSize}px` : "var(--dsw-font-markdown-base-strong-italic-font-size)";
					this.setVar(LINE_HEIGHT_VAR, `${line}px`);
					this.setVar("--dsw-font-markdown-base", `400 ${baseSize}/${line}px var(--dsw-font-family)`);
					if (a.fontSize > 0) this.setVar("--dsw-font-markdown-base-font-size", `${a.fontSize}px`);
					else this.removeVar("--dsw-font-markdown-base-font-size");
					this.setVar("--dsw-font-markdown-base-line-height", `${line}px`);
					this.setVar("--dsw-font-markdown-base-strong", `600 ${strongSize}/${line}px var(--dsw-font-family)`);
					if (a.fontSize > 0) this.setVar("--dsw-font-markdown-base-strong-font-size", `${a.fontSize}px`);
					else this.removeVar("--dsw-font-markdown-base-strong-font-size");
					this.setVar("--dsw-font-markdown-base-strong-line-height", `${line}px`);
					this.setVar("--dsw-font-markdown-base-italic", `italic ${italicSize}/${line}px var(--dsw-font-family)`);
					if (a.fontSize > 0) this.setVar("--dsw-font-markdown-base-italic-font-size", `${a.fontSize}px`);
					else this.removeVar("--dsw-font-markdown-base-italic-font-size");
					this.setVar("--dsw-font-markdown-base-italic-line-height", `${line}px`);
					this.setVar("--dsw-font-markdown-base-strong-italic", `italic 600 ${strongItalicSize}/${line}px var(--dsw-font-family)`);
					if (a.fontSize > 0) this.setVar("--dsw-font-markdown-base-strong-italic-font-size", `${a.fontSize}px`);
					else this.removeVar("--dsw-font-markdown-base-strong-italic-font-size");
					this.setVar("--dsw-font-markdown-base-strong-italic-line-height", `${line}px`);
				} else {
					this.removeVar(LINE_HEIGHT_VAR);
					for (const name of FONT_VARS) this.removeVar(name);
				}
			}
			/** Remove every attribute and variable this presenter wrote. */
			retract() {
				const body = document.body;
				body.removeAttribute(WORKSPACE_ATTR);
				body.removeAttribute(RETINA_ATTR);
				body.removeAttribute(SPACING_ATTR);
				for (const name of [...this.appliedVars]) this.removeVar(name);
			}
			/** Retract everything and remove the injected stylesheet. */
			dispose() {
				this.retract();
				this.styleTag?.remove();
				this.styleTag = null;
			}
			/** Compose the background token value: image layer over the theme/configured color. */
			composeBackground(a) {
				const image = a.backgroundImage.trim();
				const color = a.background.trim();
				if (image === "" && color === "") return void 0;
				if (image === "") return color;
				return `url("${image}") center/cover no-repeat fixed, ${color === "" ? getComputedStyle(document.body).backgroundColor || "transparent" : color}`;
			}
			setVar(name, value) {
				document.body.style.setProperty(name, value);
				this.appliedVars.add(name);
			}
			removeVar(name) {
				document.body.style.removeProperty(name);
				this.appliedVars.delete(name);
			}
		};
		//#endregion
		//#region src/client/popup.tsx
		/**
		* WorkspaceAppearancePopup: the popup settings dialog ("一个弹出的设置框").
		* Rendered by the plugin's own React root (outside the slot tree), it edits
		* the selected workspace's appearance through the settings scope — every
		* field write persists immediately via `scope.set(workspaceId, ...)`, and
		* 恢复默认 clears the entry via `scope.unset(workspaceId)`.
		*/
		/** The active workspace: the current session's workspace, else the recent one. */
		function activeWorkspaceId(sessionState, wsList) {
			const current = sessionState.current;
			if (current !== void 0) {
				const found = wsList.items.find((item) => item.sessionIds.includes(current));
				if (found !== void 0) return found.workspaceId;
			}
			return wsList.recentWorkspaceId;
		}
		/** A color input only accepts #rrggbb; other CSS colors edit through the text field. */
		function isHexColor(value) {
			return /^#[0-9a-fA-F]{6}$/.test(value);
		}
		/** Render the popup dialog. */
		function WorkspaceAppearancePopup(props) {
			const wsList = (0, react.useSyncExternalStore)((listener) => props.workspaces.subscribe(listener), () => props.workspaces.getSnapshot());
			const sessionState = (0, react.useSyncExternalStore)((listener) => props.sessions.subscribe(listener), () => props.sessions.getSnapshot());
			const section = (0, react.useSyncExternalStore)((listener) => props.scope.subscribe(listener), () => props.scope.getSnapshot()).value ?? {};
			const activeId = (0, react.useMemo)(() => activeWorkspaceId(sessionState, wsList), [sessionState, wsList]);
			const [selectedId, setSelectedId] = (0, react.useState)(props.initialWorkspaceId ?? activeId ?? "");
			(0, react.useEffect)(() => {
				if (selectedId === "") setSelectedId(activeId ?? "");
			}, [activeId, selectedId]);
			const stored = selectedId === "" ? void 0 : section[selectedId];
			const [draft, setDraft] = (0, react.useState)(() => stored ?? emptyAppearance());
			(0, react.useEffect)(() => {
				setDraft(section[selectedId] ?? emptyAppearance());
			}, [selectedId]);
			const persist = (next) => {
				setDraft(next);
				if (selectedId !== "") props.scope.set(selectedId, next);
			};
			const resetWorkspace = () => {
				if (selectedId === "") return;
				props.scope.unset(selectedId);
				setDraft(emptyAppearance());
			};
			(0, react.useEffect)(() => {
				const onKey = (event) => {
					if (event.key === "Escape") props.close();
				};
				window.addEventListener("keydown", onKey);
				return () => window.removeEventListener("keydown", onKey);
			}, [props]);
			const imageTimer = (0, react.useRef)(void 0);
			(0, react.useEffect)(() => () => window.clearTimeout(imageTimer.current), []);
			const changeImage = (value) => {
				setDraft((prev) => ({
					...prev,
					backgroundImage: value
				}));
				window.clearTimeout(imageTimer.current);
				imageTimer.current = window.setTimeout(() => {
					setDraft((prev) => {
						const next = {
							...prev,
							backgroundImage: value.trim()
						};
						if (selectedId !== "") props.scope.set(selectedId, next);
						return next;
					});
				}, 400);
			};
			const fontEnabled = draft.fontSize > 0;
			const lineHeightEnabled = draft.lineHeight > 0;
			const spacingEnabled = draft.paragraphSpacing > 0;
			const fontValue = fontEnabled ? draft.fontSize : 16;
			const automaticLineHeight = fontEnabled ? Math.round(fontValue * (28 / 16)) : 28;
			const lineHeightValue = lineHeightEnabled ? draft.lineHeight : automaticLineHeight;
			const spacingValue = spacingEnabled ? draft.paragraphSpacing : 16;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "cw-overlay",
				onClick: props.close,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "cw-dialog",
					role: "dialog",
					"aria-label": "Workspace 外观",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "cw-header",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "cw-title",
								children: "Workspace 外观"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "cw-close",
								"aria-label": "关闭",
								onClick: props.close,
								children: "×"
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "cw-body",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "cw-field",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "cw-ws-label",
										children: "应用到 Workspace（跟随当前会话所属的 workspace）"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
										className: "cw-ws-select",
										value: selectedId,
										onChange: (event) => setSelectedId(event.target.value),
										children: wsList.items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
											value: item.workspaceId,
											children: [item.title, item.workspaceId === activeId ? "（当前）" : ""]
										}, item.workspaceId))
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "cw-field",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "cw-label",
										children: "背景颜色"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "cw-controls",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											className: "cw-color",
											type: "color",
											"aria-label": "背景颜色",
											value: isHexColor(draft.background) ? draft.background : "#ffffff",
											onChange: (event) => persist({
												...draft,
												background: event.target.value
											})
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											className: "cw-input",
											type: "text",
											placeholder: "任意 CSS 颜色，如 #1e293b / rgb(30,41,59)；留空继承主题",
											value: draft.background,
											onChange: (event) => persist({
												...draft,
												background: event.target.value
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "cw-field",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "cw-label",
										children: "背景图片 URL"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										className: "cw-input",
										type: "text",
										placeholder: "https://… 或留空（覆盖整个主内容区）",
										value: draft.backgroundImage,
										onChange: (event) => changeImage(event.target.value)
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "cw-field",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "cw-label",
											children: "字体大小"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
											className: "cw-check",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: fontEnabled,
												onChange: (event) => persist({
													...draft,
													fontSize: event.target.checked ? 16 : 0
												})
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "自定义（默认 16px）" })]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "cw-controls",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: "cw-range",
												type: "range",
												min: 12,
												max: 28,
												step: 1,
												disabled: !fontEnabled,
												value: fontValue,
												onChange: (event) => persist({
													...draft,
													fontSize: Number(event.target.value)
												})
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "cw-value",
												children: [fontValue, "px"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "cw-field",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "cw-label",
											children: "行间距"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
											className: "cw-check",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: lineHeightEnabled,
												onChange: (event) => persist({
													...draft,
													lineHeight: event.target.checked ? automaticLineHeight : 0
												})
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "自定义（默认按字号自动计算）" })]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "cw-controls",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: "cw-range",
												type: "range",
												min: 16,
												max: 56,
												step: 1,
												disabled: !lineHeightEnabled,
												value: lineHeightValue,
												onChange: (event) => persist({
													...draft,
													lineHeight: Number(event.target.value)
												})
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "cw-value",
												children: [lineHeightValue, "px"]
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "cw-hint",
											children: "Markdown 正文和列表项每一行的高度"
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "cw-field",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "cw-label",
											children: "段落间距"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
											className: "cw-check",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: spacingEnabled,
												onChange: (event) => persist({
													...draft,
													paragraphSpacing: event.target.checked ? 16 : 0
												})
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "自定义（默认 16px）" })]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "cw-controls",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: "cw-range",
												type: "range",
												min: 0,
												max: 48,
												step: 1,
												disabled: !spacingEnabled,
												value: spacingValue,
												onChange: (event) => persist({
													...draft,
													paragraphSpacing: Number(event.target.value)
												})
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "cw-value",
												children: [spacingValue, "px"]
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "cw-hint",
											children: "Markdown 段落、列表项、标题、引用和代码块之间的间距"
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "cw-field",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										className: "cw-check",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: draft.retinaRendering,
											onChange: (event) => persist({
												...draft,
												retinaRendering: event.target.checked
											})
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Retina 字体渲染（抗锯齿灰度，关闭时用亚像素渲染）" })]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "cw-footer",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "cw-btn",
								onClick: resetWorkspace,
								children: "恢复默认"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "cw-btn",
								onClick: props.close,
								children: "关闭"
							})]
						})
					]
				})
			});
		}
		//#endregion
		//#region src/client/settings-scope.ts
		function record(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
		}
		function appearance(value) {
			const input = record(value);
			if (input === void 0 || typeof input.background !== "string" || typeof input.backgroundImage !== "string" || typeof input.fontSize !== "number" || input.fontSize < 0 || input.fontSize > 28 || typeof input.lineHeight !== "number" || input.lineHeight < 0 || input.lineHeight > 56 || typeof input.paragraphSpacing !== "number" || input.paragraphSpacing < 0 || input.paragraphSpacing > 48 || typeof input.retinaRendering !== "boolean") return void 0;
			return {
				background: input.background,
				backgroundImage: input.backgroundImage,
				fontSize: input.fontSize,
				lineHeight: input.lineHeight,
				paragraphSpacing: input.paragraphSpacing,
				retinaRendering: input.retinaRendering
			};
		}
		function settings(value) {
			const input = record(value);
			if (input === void 0) return void 0;
			const output = {};
			for (const [workspaceId, candidate] of Object.entries(input)) {
				const decoded = appearance(candidate);
				if (decoded === void 0) return void 0;
				output[workspaceId] = decoded;
			}
			return output;
		}
		/** Reactive settings handle for the custom-workspace namespace. */
		var WorkspaceSettingsScope = class {
			rpc;
			snapshot = {
				status: "loading",
				value: void 0,
				base: void 0,
				user: void 0,
				revision: void 0,
				writable: false,
				mode: "host"
			};
			listeners = /* @__PURE__ */ new Set();
			tail = Promise.resolve();
			disposed = false;
			/** @param rpc - active browser Connection RPC caller. */
			constructor(rpc) {
				this.rpc = rpc;
			}
			/** @returns the current settings snapshot. */
			getSnapshot() {
				return this.snapshot;
			}
			/** Observe snapshot replacements. */
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			/** Refresh the complete plugin section from the Host. */
			load() {
				return this.enqueue(async () => {
					try {
						const result = await this.rpc.call(RPC_CHANNEL, "settings/describe", {});
						if (result.ok) this.accept(result.value);
						else this.unavailable();
					} catch {
						this.unavailable();
					}
				});
			}
			/** Set one workspace appearance. */
			set(workspaceId, value) {
				return this.write("settings/set", {
					workspaceId,
					appearance: value
				});
			}
			/** Clear one workspace appearance. */
			unset(workspaceId) {
				return this.write("settings/unset", { workspaceId });
			}
			/** Stop future publications after plugin teardown. */
			dispose() {
				this.disposed = true;
				this.listeners.clear();
			}
			write(endpoint, payload) {
				return this.enqueue(async () => {
					try {
						const result = await this.rpc.call(RPC_CHANNEL, endpoint, payload);
						if (result.ok) this.accept(result.value);
						else await this.reloadAfterFailure();
					} catch {
						await this.reloadAfterFailure();
					}
				});
			}
			enqueue(operation) {
				if (this.disposed) return Promise.resolve();
				const task = this.tail.then(async () => {
					if (!this.disposed) await operation();
				});
				this.tail = task.catch(() => {});
				return task;
			}
			async reloadAfterFailure() {
				try {
					const result = await this.rpc.call(RPC_CHANNEL, "settings/describe", {});
					if (result.ok) this.accept(result.value);
					else this.unavailable();
				} catch {
					this.unavailable();
				}
			}
			accept(value) {
				const decoded = settings(value);
				if (decoded === void 0 || this.disposed) return;
				this.publish({
					status: "ready",
					value: decoded,
					base: void 0,
					user: decoded,
					revision: void 0,
					writable: true,
					mode: "host"
				});
			}
			unavailable() {
				if (this.disposed) return;
				this.publish({
					...this.snapshot,
					status: "unavailable",
					writable: false
				});
			}
			publish(next) {
				this.snapshot = next;
				for (const listener of [...this.listeners]) listener();
			}
		};
		//#endregion
		//#region src/client/index.tsx
		/**
		* Browser half of dsh-custom-workspace: binds the `custom-workspace` settings
		* scope, projects the active workspace's appearance onto the document through
		* the presenter, and registers a General-settings row that opens the popup
		* dialog. The bundle is a module-table consumer only (react + react-dom +
		* cordis externals); all dsh collaboration goes through cordis services with
		* type-only imports.
		*/
		/** Services required before this plugin activates. */
		const inject = [
			"slots",
			"sessions",
			"workspaces",
			"connection"
		];
		/** The General-settings row that opens the popup dialog. */
		function CustomWorkspaceRow({ open }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "cw-row-button",
				onClick: open,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Workspace 外观" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "cw-row-arrow",
					children: "›"
				})]
			});
		}
		/** Owns the popup React root; renders on demand, unmounts on close/teardown. */
		var PopupController = class {
			sources;
			root = null;
			container = null;
			active;
			constructor(sources) {
				this.sources = sources;
			}
			/** Track the active workspace so the popup preselects it when opened. */
			setActive(workspaceId) {
				this.active = workspaceId;
			}
			/** Mount the popup dialog over the page. */
			open() {
				if (this.root !== null) return;
				this.container = document.createElement("div");
				document.body.appendChild(this.container);
				this.root = (0, react_dom_client.createRoot)(this.container);
				this.root.render(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkspaceAppearancePopup, {
					...this.sources,
					initialWorkspaceId: this.active,
					close: () => this.close()
				}));
			}
			/** Unmount the popup dialog. */
			close() {
				this.root?.unmount();
				this.root = null;
				this.container?.remove();
				this.container = null;
			}
		};
		/**
		* Client plugin body: bind the settings scope, wire the presenter to the live
		* session/workspace feeds, and register the settings row.
		* @param ctx - client cordis context.
		*/
		function apply(ctx) {
			const connection = ctx.connection;
			const scope = new WorkspaceSettingsScope(connection.rpc);
			scope.load();
			const presenter = new WorkspacePresenter();
			presenter.mount();
			const popup = new PopupController({
				workspaces: ctx.workspaces.list,
				sessions: ctx.sessions.list,
				scope
			});
			const refresh = () => {
				const workspaceId = activeWorkspaceId(ctx.sessions.list.getSnapshot(), ctx.workspaces.list.getSnapshot());
				popup.setActive(workspaceId);
				presenter.apply(workspaceId, workspaceId === void 0 ? void 0 : scope.getSnapshot().value?.[workspaceId]);
			};
			const unsubscribe = [
				ctx.workspaces.list.subscribe(refresh),
				ctx.sessions.list.subscribe(refresh),
				scope.subscribe(refresh)
			];
			refresh();
				if (typeof sharedRef !== "undefined") sharedRef.refresh = refresh;
			ctx.effect(() => () => {
				for (const dispose of unsubscribe) dispose();
				scope.dispose();
				presenter.dispose();
				popup.close();
			}, "dsh-custom-workspace: presenter, subscriptions, and popup teardown");
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "custom-workspace",
				order: 20,
				inject: () => ({ open: () => popup.open() })
			}, CustomWorkspaceRow));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
		})();
		/* coordinator: one plugin row, deterministic body-font precedence */
		const inject = [...new Set([
			...(themePart.inject ?? []),
			...(workspacePart.inject ?? [])
		])];
		function apply(ctx) {
			themePart.apply(ctx);
			workspacePart.apply(ctx);
			/* ThemePresenter (official ui-layout) rewrites body tokens on every
			   theme/change; re-running the workspace presenter afterwards makes
			   per-workspace settings win for body font size / line height /
			   background, while unset fields fall back to the global theme. */
			ctx.on("theme/change", () => {
				sharedRef.refresh?.();
			}, "dsh-appearance: re-apply workspace appearance after theme change");
		}
		return { apply, inject };
	}
});
