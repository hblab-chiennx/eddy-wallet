/* @ds-bundle: {"format":4,"namespace":"EddyWalletDesignSystem_7e6d2a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"AmountField","sourcePath":"components/forms/AmountField.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PinPad","sourcePath":"components/forms/PinPad.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"ACTIVITY_TYPES","sourcePath":"components/wallet/ActivityRow.jsx"},{"name":"ActivityRow","sourcePath":"components/wallet/ActivityRow.jsx"},{"name":"BalanceCard","sourcePath":"components/wallet/BalanceCard.jsx"},{"name":"LessonCard","sourcePath":"components/wallet/LessonCard.jsx"},{"name":"LoanCard","sourcePath":"components/wallet/LoanCard.jsx"},{"name":"MoneyAmount","sourcePath":"components/wallet/MoneyAmount.jsx"},{"name":"ParentOnlyChip","sourcePath":"components/wallet/ParentOnlyChip.jsx"},{"name":"StatTile","sourcePath":"components/wallet/StatTile.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dd6513c07ca6","components/core/Button.jsx":"04857b232bcc","components/core/Card.jsx":"c69ba9b9630f","components/core/Icon.jsx":"3cac84858612","components/core/IconButton.jsx":"e510c458ab1a","components/core/SectionHeading.jsx":"3e10f6db76ae","components/core/iconPaths.js":"aff75ee0b10e","components/feedback/Dialog.jsx":"cb98746cf1fc","components/feedback/EmptyState.jsx":"6034ebaac8e0","components/feedback/ProgressBar.jsx":"7ddc64ae9c26","components/feedback/Toast.jsx":"78d7c7d18c63","components/forms/AmountField.jsx":"b88a913667e4","components/forms/Checkbox.jsx":"212126d8f848","components/forms/Input.jsx":"4af29a2a49a5","components/forms/PinPad.jsx":"ab32a38a0fa2","components/forms/Select.jsx":"d54f184f562f","components/forms/Switch.jsx":"7abac273e28e","components/navigation/TabBar.jsx":"ddf3b1510e34","components/navigation/Tabs.jsx":"cb810d277205","components/navigation/TopBar.jsx":"78deebe7e284","components/wallet/ActivityRow.jsx":"e1a4f5e452b1","components/wallet/BalanceCard.jsx":"c04daa4264c7","components/wallet/LessonCard.jsx":"9002c4dd9bac","components/wallet/LoanCard.jsx":"002f249537b5","components/wallet/MoneyAmount.jsx":"a46a64378b3b","components/wallet/ParentOnlyChip.jsx":"a10052e6d270","components/wallet/StatTile.jsx":"989494a7d713","ui_kits/child_mode/ChildActivity.jsx":"a3e4b91947c3","ui_kits/child_mode/ChildHome.jsx":"2038d108103d","ui_kits/child_mode/ChildLessons.jsx":"39139dc2a248","ui_kits/child_mode/ChildLoans.jsx":"f9efc6455e53","ui_kits/child_mode/Entry.jsx":"1c0a1013d0a5","ui_kits/child_mode/app.jsx":"d04447c415b8","ui_kits/child_mode/data.js":"ea2f6b05bf67","ui_kits/parent_mode/AllowanceRules.jsx":"d27fcb036d0b","ui_kits/parent_mode/FamilySetup.jsx":"6e983f01e354","ui_kits/parent_mode/ParentActions.jsx":"794d2034e7d9","ui_kits/parent_mode/ParentActivity.jsx":"798853cae71b","ui_kits/parent_mode/ParentDashboard.jsx":"b507b98d33b6","ui_kits/parent_mode/Sidebar.jsx":"7b4300937829","ui_kits/parent_mode/app.jsx":"d0ba537ec69a","ui_kits/parent_mode/data.js":"11a71cdbce56"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/core/Icon.jsx"},{"name":"iconPaths","sourcePath":"components/core/iconPaths.js"}]} */

(() => {

const __ds_ns = (window.EddyWalletDesignSystem_7e6d2a = window.EddyWalletDesignSystem_7e6d2a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)"
  },
  sunken: {
    background: "var(--surface-sunken)",
    border: "1px solid var(--cream-300)"
  },
  brand: {
    background: "var(--brand-primary-soft)",
    border: "1px solid var(--teal-200)"
  },
  parent: {
    background: "var(--surface-parent)",
    border: "1px solid var(--sky-200)"
  },
  inverse: {
    background: "var(--surface-inverse)",
    border: "1px solid var(--teal-900)"
  }
};

/** Content container. Soft shadow in Parent Mode, sticker shadow in Child Mode. */
function Card({
  tone = "paper",
  sticker = false,
  padding = "var(--space-5)",
  radius = "var(--radius-lg)",
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.background,
      border: t.border,
      borderRadius: radius,
      padding,
      boxShadow: sticker ? "var(--shadow-sticker)" : "var(--shadow-card)",
      color: tone === "inverse" ? "var(--text-inverse)" : "var(--text-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/iconPaths.js
try { (() => {
const iconPaths = {
  "arrow-down-left": '<path d="M17 7 7 17"></path> <path d="M17 17H7V7"></path>',
  "arrow-up-right": '<path d="M7 7h10v10"></path> <path d="M7 17 17 7"></path>',
  "banknote": '<rect width="20" height="12" x="2" y="6" rx="2"></rect> <circle cx="12" cy="12" r="2"></circle> <path d="M6 12h.01M18 12h.01"></path>',
  "bell": '<path d="M10.268 21a2 2 0 0 0 3.464 0"></path> <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>',
  "book-open": '<path d="M12 5v16"></path> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>',
  "calendar": '<path d="M8 2v3"></path> <path d="M16 2v3"></path> <rect x="3" y="3" width="18" height="18" rx="2"></rect> <path d="M3 9h18"></path>',
  "check-check": '<path d="M18 6 7 17l-5-5"></path> <path d="m22 10-7.5 7.5L13 16"></path>',
  "check": '<path d="M20 6 9 17l-5-5"></path>',
  "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
  "chevron-left": '<path d="m15 18-6-6 6-6"></path>',
  "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
  "circle-check-big": '<path d="M21.801 10A10 10 0 1 1 17 3.335"></path> <path d="m9 11 3 3L22 4"></path>',
  "circle-check": '<circle cx="12" cy="12" r="10"></circle> <path d="m16 9-5.5 5.5L8 12"></path>',
  "clock": '<circle cx="12" cy="12" r="10"></circle> <path d="M12 6v6l4 2"></path>',
  "coins": '<path d="M13.744 17.736a6 6 0 1 1-7.48-7.48"></path> <path d="M15 6h1v4"></path> <path d="m6.134 14.768.866-.5 2 3.464"></path> <circle cx="16" cy="8" r="6"></circle>',
  "delete": '<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></path> <path d="m12 9 6 6"></path> <path d="m18 9-6 6"></path>',
  "eye": '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path> <circle cx="12" cy="12" r="3"></circle>',
  "flame": '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>',
  "funnel": '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>',
  "gift": '<path d="M12 7v14"></path> <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path> <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"></path> <rect x="3" y="7" width="18" height="4" rx="1"></rect>',
  "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path> <path d="M22 10v6"></path> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>',
  "hand-coins": '<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path> <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path> <path d="m2 16 6 6"></path> <circle cx="16" cy="9" r="2.9"></circle> <circle cx="6" cy="5" r="3"></circle>',
  "house": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
  "info": '<circle cx="12" cy="12" r="10"></circle> <path d="M12 16v-4"></path> <path d="M12 8h.01"></path>',
  "lightbulb": '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path> <path d="M9 18h6"></path> <path d="M10 22h4"></path>',
  "list": '<path d="M3 5h.01"></path> <path d="M3 12h.01"></path> <path d="M3 19h.01"></path> <path d="M8 5h13"></path> <path d="M8 12h13"></path> <path d="M8 19h13"></path>',
  "lock-open": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
  "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  "log-out": '<path d="m16 17 5-5-5-5"></path> <path d="M21 12H9"></path> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>',
  "minus": '<path d="M5 12h14"></path>',
  "party-popper": '<path d="M5.8 11.3 2 22l10.7-3.79"></path> <path d="M4 3h.01"></path> <path d="M22 8h.01"></path> <path d="M15 2h.01"></path> <path d="M22 20h.01"></path> <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path> <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path> <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path> <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>',
  "pencil": '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path> <path d="m15 5 4 4"></path>',
  "percent": '<line x1="19" x2="5" y1="5" y2="19"></line> <circle cx="6.5" cy="6.5" r="2.5"></circle> <circle cx="17.5" cy="17.5" r="2.5"></circle>',
  "piggy-bank": '<path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path> <path d="M16 10h.01"></path> <path d="M2 8v1a2 2 0 0 0 2 2h1"></path>',
  "plus": '<path d="M5 12h14"></path> <path d="M12 5v14"></path>',
  "repeat": '<path d="m17 2 4 4-4 4"></path> <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path> <path d="m7 22-4-4 4-4"></path> <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path> <path d="M3 3v5h5"></path>',
  "search": '<path d="m21 21-4.34-4.34"></path> <circle cx="11" cy="11" r="8"></circle>',
  "settings": '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path> <circle cx="12" cy="12" r="3"></circle>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> <path d="m9 12 2 2 4-4"></path>',
  "sparkles": '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path> <path d="M20 2v4"></path> <path d="M22 4h-4"></path> <circle cx="4" cy="20" r="2"></circle>',
  "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>',
  "trash": '<path d="M10 11v6"></path> <path d="M14 11v6"></path> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path> <path d="M3 6h18"></path> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
  "trending-up": '<path d="M16 7h6v6"></path> <path d="m22 7-8.5 8.5-5-5L2 17"></path>',
  "triangle-alert": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path> <path d="M12 9v4"></path> <path d="M12 17h.01"></path>',
  "trophy": '<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"></path> <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"></path> <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"></path> <path d="M4 22h16"></path> <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path> <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"></path>',
  "user": '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle>',
  "wallet": '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path> <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>',
  "x": '<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path>'
};
Object.assign(__ds_scope, { iconPaths });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/iconPaths.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide glyph rendered inline. Stroke-only, 2px, currentColor. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const body = __ds_scope.iconPaths[name];
  if (!body) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: body
    }
  }, rest));
}
const iconNames = Object.keys(__ds_scope.iconPaths);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ["var(--ink-100)", "var(--ink-700)"],
  teal: ["var(--teal-100)", "var(--teal-800)"],
  sun: ["var(--sun-100)", "var(--sun-700)"],
  berry: ["var(--berry-100)", "var(--berry-700)"],
  sky: ["var(--sky-100)", "var(--sky-700)"],
  grape: ["var(--grape-100)", "var(--grape-700)"],
  success: ["var(--state-success-soft)", "var(--state-success)"]
};

/** Small status pill. */
function Badge({
  tone = "neutral",
  icon,
  uppercase = false,
  children,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: bg,
      color: fg,
      padding: "3px 10px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: uppercase ? "var(--tracking-label)" : "var(--tracking-normal)",
      textTransform: uppercase ? "uppercase" : "none",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2.5
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: "var(--brand-primary)",
    color: "var(--text-inverse)",
    border: "2px solid var(--teal-800)",
    shadow: "var(--shadow-sticker)"
  },
  accent: {
    background: "var(--brand-accent)",
    color: "var(--ink-900)",
    border: "2px solid var(--sun-600)",
    shadow: "var(--shadow-sticker)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-heading)",
    border: "2px solid var(--border-strong)",
    shadow: "var(--shadow-sticker)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-link)",
    border: "2px solid transparent",
    shadow: "none"
  },
  danger: {
    background: "var(--state-danger)",
    color: "var(--text-inverse)",
    border: "2px solid var(--berry-700)",
    shadow: "var(--shadow-sticker)"
  }
};
const SIZES = {
  sm: {
    height: 36,
    padding: "0 14px",
    fontSize: "var(--text-sm)",
    radius: "var(--radius-sm)",
    icon: 16
  },
  md: {
    height: 48,
    padding: "0 20px",
    fontSize: "var(--text-body)",
    radius: "var(--radius-md)",
    icon: 18
  },
  lg: {
    height: 56,
    padding: "0 28px",
    fontSize: "var(--text-body-lg)",
    radius: "var(--radius-lg)",
    icon: 22
  }
};

/** The one pressable control. Sticker shadow compresses 2px on press. */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      fontSize: s.fontSize,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      background: v.background,
      color: v.color,
      border: v.border,
      boxShadow: pressed && !disabled ? "var(--shadow-sticker-press)" : v.shadow,
      transform: pressed && !disabled ? "translateY(2px)" : "none",
      transition: "transform var(--dur-instant) var(--ease-out), box-shadow var(--dur-instant) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      filter: pressed ? "none" : undefined,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plain: {
    background: "transparent",
    color: "var(--ink-600)",
    border: "2px solid transparent"
  },
  soft: {
    background: "var(--brand-primary-soft)",
    color: "var(--teal-800)",
    border: "2px solid transparent"
  },
  outline: {
    background: "var(--surface-card)",
    color: "var(--text-heading)",
    border: "2px solid var(--border-strong)"
  }
};

/** Square tap target for toolbar and row-level actions. */
function IconButton({
  icon,
  label,
  tone = "plain",
  size = 44,
  disabled,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.plain;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-md)",
      background: hover && !disabled && tone === "plain" ? "var(--ink-100)" : t.background,
      color: t.color,
      border: t.border,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Row heading with optional trailing action. */
function SectionHeading({
  title,
  subtitle,
  action,
  onAction,
  icon,
  level = "h2",
  style,
  ...rest
}) {
  const Tag = level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      alignItems: "center"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--brand-primary)"
  }) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle) : null)), action ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "none",
      border: "none",
      padding: "6px 2px",
      color: "var(--text-link)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-sm)",
      cursor: "pointer"
    }
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Centered modal for confirmations and short parent forms. */
function Dialog({
  open = true,
  title,
  description,
  icon,
  tone = "brand",
  parentOnly,
  children,
  confirmLabel,
  onConfirm,
  cancelLabel = "Cancel",
  onClose,
  style
}) {
  if (!open) return null;
  const accent = tone === "danger" ? "var(--state-danger-soft)" : tone === "parent" ? "var(--surface-parent)" : "var(--brand-primary-soft)";
  const accentInk = tone === "danger" ? "var(--state-danger)" : tone === "parent" ? "var(--state-locked)" : "var(--brand-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      background: "rgba(6,49,43,0.42)",
      backdropFilter: "blur(3px)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxWidth: 420,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-raised)",
      padding: "var(--space-6)",
      animation: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: accent
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: accentInk
  })) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, title), parentOnly ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4,
      alignItems: "center",
      marginTop: 3,
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--state-locked)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 11
  }), "Parent only") : null)), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose,
    size: 38
  }) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      marginBottom: 0,
      color: "var(--text-body)"
    }
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, children) : null, confirmLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: onClose
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone === "danger" ? "danger" : "primary",
    fullWidth: true,
    onClick: onConfirm
  }, confirmLabel)) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Friendly nothing-here block. */
function EmptyState({
  icon = "sparkles",
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      textAlign: "center",
      gap: "var(--space-2)",
      padding: "var(--space-8) var(--space-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 64,
      height: 64,
      borderRadius: "var(--radius-xl)",
      background: "var(--brand-primary-soft)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    color: "var(--brand-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320,
      fontSize: "var(--text-body)",
      color: "var(--text-muted)"
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Track for savings goals, lesson progress, and repayment. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "teal",
  label,
  valueLabel,
  height = 14,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / (max || 1) * 100));
  const fill = {
    teal: "var(--brand-primary)",
    sun: "var(--sun-500)",
    berry: "var(--state-danger)",
    grape: "var(--grape-600)"
  }[tone] || "var(--brand-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label || valueLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      marginBottom: 6,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-muted)"
    }
  }, valueLabel)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: "var(--radius-pill)",
      background: "var(--ink-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: fill,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: ["var(--state-success)", "circle-check"],
  info: ["var(--teal-800)", "info"],
  warning: ["var(--sun-700)", "triangle-alert"],
  danger: ["var(--state-danger)", "triangle-alert"]
};

/** Transient confirmation. Kid Mode gets the celebratory variant. */
function Toast({
  tone = "success",
  message,
  detail,
  celebrate,
  style,
  ...rest
}) {
  const [ink, defaultIcon] = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      padding: "12px 16px",
      background: celebrate ? "var(--brand-accent)" : "var(--surface-card)",
      border: "2px solid " + (celebrate ? "var(--sun-600)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-raised)",
      maxWidth: 420,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: celebrate ? "party-popper" : defaultIcon,
    size: 22,
    color: celebrate ? "var(--ink-900)" : ink
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, message), detail ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: celebrate ? "var(--sun-700)" : "var(--text-muted)"
    }
  }, detail) : null));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/AmountField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big money entry used by deposit/withdraw/allowance flows. */
function AmountField({
  label,
  value = "",
  onChange,
  hint,
  max,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "14px 18px",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "2px solid " + (focus ? "var(--brand-primary)" : "var(--border-strong)"),
      boxShadow: focus ? "var(--ring-focus)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-money-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-400)"
    }
  }, "$"), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    inputMode: "decimal",
    placeholder: "0.00",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: "var(--text-money-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, rest))), hint || max != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, hint || "Wallet balance: $" + Number(max).toFixed(2)) : null);
}
Object.assign(__ds_scope, { AmountField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AmountField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with a chunky tap area. */
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      minHeight: "var(--tap-min)",
      padding: "6px 0",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 26,
      height: 26,
      flex: "none",
      marginTop: 2,
      borderRadius: "var(--radius-xs)",
      background: checked ? "var(--brand-primary)" : "var(--surface-card)",
      border: "2px solid " + (checked ? "var(--teal-800)" : "var(--border-strong)"),
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--text-inverse)",
    strokeWidth: 3
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text/number field with label, hint and error. */
function Input({
  label,
  hint,
  error,
  icon,
  prefix,
  id,
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || "in-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const h = size === "lg" ? 56 : 48;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: h,
      padding: "0 14px",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      border: "2px solid " + (error ? "var(--state-danger)" : focus ? "var(--brand-primary)" : "var(--border-strong)"),
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--ink-500)"
  }) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--weight-bold)",
      color: "var(--ink-500)"
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontSize: size === "lg" ? "var(--text-body-lg)" : "var(--text-body)",
      color: "var(--text-heading)"
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center",
      marginTop: 6,
      fontSize: "var(--text-sm)",
      color: "var(--state-danger)",
      fontWeight: "var(--weight-semibold)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "triangle-alert",
    size: 14
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PinPad.jsx
try { (() => {
const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

/** 4-digit PIN entry for the shared-device child unlock. */
function PinPad({
  length = 4,
  value = "",
  onChange,
  error,
  style
}) {
  const press = k => {
    if (!onChange) return;
    if (k === "del") onChange(value.slice(0, -1));else if (k && value.length < length) onChange(value + k);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, Array.from({
    length
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: i < value.length ? "var(--brand-primary)" : "transparent",
      border: "2px solid " + (error ? "var(--state-danger)" : i < value.length ? "var(--teal-800)" : "var(--border-strong)"),
      transition: "background var(--dur-fast) var(--ease-bounce)"
    }
  }))), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--state-danger)"
    }
  }, error) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 72px)",
      gap: "var(--space-3)"
    }
  }, KEYS.map((k, i) => k === "" ? /*#__PURE__*/React.createElement("span", {
    key: i
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => press(k),
    "aria-label": k === "del" ? "Delete" : k,
    style: {
      height: 64,
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      border: "2px solid var(--border-strong)",
      boxShadow: "var(--shadow-sticker)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-money-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)",
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, k === "del" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "delete",
    size: 22
  }) : k))));
}
Object.assign(__ds_scope, { PinPad });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PinPad.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select in brand clothing. */
function Select({
  label,
  hint,
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 48,
      padding: "0 12px 0 14px",
      background: "var(--surface-card)",
      border: "2px solid var(--border-strong)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)",
      cursor: "pointer"
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value
  }, typeof o === "string" ? o : o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--ink-500)"
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Settings toggle. Optional parent-only lock marker. */
function Switch({
  label,
  description,
  checked = false,
  onChange,
  parentOnly,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "var(--tap-min)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)"
    }
  }, label, parentOnly ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 13,
    color: "var(--state-locked)",
    label: "Parent only"
  }) : null), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flex: "none",
      width: 52,
      height: 30,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--brand-primary)" : "var(--ink-300)",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 25 : 3,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--paper)",
      boxShadow: "0 1px 3px rgba(6,49,43,0.3)",
      transition: "left var(--dur-base) var(--ease-bounce)"
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/** Bottom nav for Child Mode (and narrow Parent Mode). */
function TabBar({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "1fr",
      alignItems: "stretch",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "6px 8px 10px",
      ...style
    }
  }, items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      "aria-current": active ? "page" : undefined,
      style: {
        display: "grid",
        justifyItems: "center",
        gap: 3,
        padding: "8px 4px",
        minHeight: "var(--tap-min)",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: active ? "var(--brand-primary)" : "var(--ink-500)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        placeItems: "center",
        width: 44,
        height: 30,
        borderRadius: "var(--radius-pill)",
        background: active ? "var(--brand-primary-soft)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 21,
      strokeWidth: active ? 2.4 : 2
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: active ? "var(--weight-bold)" : "var(--weight-semibold)"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Inline segmented filter (activity types, date ranges). */
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  style
}) {
  const h = size === "sm" ? 34 : 40;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      padding: 4,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      overflowX: "auto",
      ...style
    }
  }, items.map(it => {
    const id = typeof it === "string" ? it : it.id;
    const label = typeof it === "string" ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      type: "button",
      onClick: () => onChange && onChange(id),
      style: {
        height: h,
        padding: "0 16px",
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: "pointer",
        background: active ? "var(--surface-card)" : "transparent",
        boxShadow: active ? "0 1px 2px rgba(6,49,43,0.14)" : "none",
        color: active ? "var(--text-heading)" : "var(--text-muted)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-bold)",
        whiteSpace: "nowrap",
        transition: "background var(--dur-fast) var(--ease-out)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
/** Screen header. mode="parent" shows the blue parent rail. */
function TopBar({
  title,
  subtitle,
  back,
  onBack,
  mode = "child",
  actions,
  style
}) {
  const parent = mode === "parent";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "14px var(--gutter-mobile)",
      background: parent ? "var(--surface-card)" : "transparent",
      borderBottom: parent ? "1px solid var(--border-subtle)" : "none",
      boxShadow: parent ? "inset 0 3px 0 var(--sky-600)" : "none",
      ...style
    }
  }, back ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: "Back",
    onClick: onBack,
    tone: "outline",
    size: 40
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-h2)"
    }
  }, title), parent ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield-check",
    size: 16,
    color: "var(--state-locked)",
    label: "Parent Mode"
  }) : null), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-1)"
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/wallet/LessonCard.jsx
try { (() => {
/** A lesson tile in the learn track. */
function LessonCard({
  title,
  blurb,
  minutes,
  state = "available",
  index,
  onClick,
  style
}) {
  const locked = state === "locked";
  const done = state === "done";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: locked ? undefined : onClick,
    disabled: locked,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      width: "100%",
      textAlign: "left",
      padding: "var(--space-4)",
      borderRadius: "var(--radius-xl)",
      background: locked ? "var(--surface-sunken)" : "var(--surface-card)",
      border: "2px solid " + (done ? "var(--teal-200)" : locked ? "var(--cream-300)" : "var(--grape-200)"),
      boxShadow: locked ? "none" : "var(--shadow-sticker)",
      cursor: locked ? "not-allowed" : "pointer",
      opacity: locked ? 0.75 : 1,
      font: "inherit",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 52,
      height: 52,
      flex: "none",
      borderRadius: "var(--radius-lg)",
      background: done ? "var(--teal-100)" : locked ? "var(--ink-100)" : "var(--grape-100)"
    }
  }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check-big",
    size: 26,
    color: "var(--teal-800)"
  }) : locked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 22,
    color: "var(--ink-500)"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lightbulb",
    size: 26,
    color: "var(--grape-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      alignItems: "center",
      marginBottom: 2
    }
  }, index != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      color: "var(--text-muted)"
    }
  }, String(index).padStart(2, "0")) : null, done ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    icon: "check"
  }, "Done") : locked ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, "Locked") : /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "grape",
    icon: "sparkles"
  }, "Next up")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, title), blurb ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, blurb) : null), minutes != null && !locked ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4,
      alignItems: "center",
      flex: "none",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14
  }), minutes, " min") : null);
}
Object.assign(__ds_scope, { LessonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/LessonCard.jsx", error: String((e && e.message) || e) }); }

// components/wallet/MoneyAmount.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "var(--text-sm)",
  md: "var(--text-money)",
  lg: "var(--text-money-lg)",
  hero: "var(--text-money-hero)"
};

/** The single way money is rendered. Mono, tabular, signed by direction. */
function MoneyAmount({
  value = 0,
  size = "md",
  direction,
  showSign = false,
  currency = "$",
  style,
  ...rest
}) {
  const dir = direction || (value > 0 ? "in" : value < 0 ? "out" : "neutral");
  const color = dir === "in" ? "var(--money-in)" : dir === "out" ? "var(--money-out)" : "var(--money-neutral)";
  const abs = Math.abs(value).toFixed(2);
  const sign = showSign ? dir === "in" ? "+" : dir === "out" ? "\u2212" : "" : "";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontWeight: "var(--weight-bold)",
      fontSize: SIZES[size] || SIZES.md,
      letterSpacing: size === "hero" ? "-0.02em" : "0",
      color,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), sign, currency, abs);
}
Object.assign(__ds_scope, { MoneyAmount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/MoneyAmount.jsx", error: String((e && e.message) || e) }); }

// components/wallet/ActivityRow.jsx
try { (() => {
/** One ledger entry. Same shape for every event type — only the glyph and colour change. */
const ACTIVITY_TYPES = {
  allowance: {
    icon: "hand-coins",
    bg: "var(--teal-100)",
    ink: "var(--teal-800)",
    label: "Allowance"
  },
  deposit: {
    icon: "arrow-down-left",
    bg: "var(--teal-100)",
    ink: "var(--teal-800)",
    label: "Deposit"
  },
  spend: {
    icon: "arrow-up-right",
    bg: "var(--berry-100)",
    ink: "var(--berry-700)",
    label: "Spending"
  },
  withdraw: {
    icon: "banknote",
    bg: "var(--berry-100)",
    ink: "var(--berry-700)",
    label: "Withdrawal"
  },
  loan: {
    icon: "hand-coins",
    bg: "var(--sun-100)",
    ink: "var(--sun-700)",
    label: "Loan"
  },
  repayment: {
    icon: "rotate-ccw",
    bg: "var(--sun-100)",
    ink: "var(--sun-700)",
    label: "Repayment"
  },
  interest: {
    icon: "percent",
    bg: "var(--teal-100)",
    ink: "var(--teal-800)",
    label: "Interest"
  },
  lesson: {
    icon: "graduation-cap",
    bg: "var(--grape-100)",
    ink: "var(--grape-700)",
    label: "Lesson"
  }
};
function ActivityRow({
  type = "allowance",
  title,
  meta,
  amount,
  points,
  pending,
  parentOnly,
  onClick,
  style
}) {
  const t = ACTIVITY_TYPES[type] || ACTIVITY_TYPES.allowance;
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    role: clickable ? "button" : undefined,
    tabIndex: clickable ? 0 : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "12px 4px",
      borderBottom: "1px solid var(--border-subtle)",
      cursor: clickable ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 42,
      height: 42,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: t.bg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title || t.label), parentOnly ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 12,
    color: "var(--state-locked)",
    label: "Parent only"
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, pending ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sun-700)",
      fontWeight: "var(--weight-bold)"
    }
  }, "Waiting for a parent \xB7 ") : null, meta)), amount != null ? /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: amount,
    showSign: true,
    direction: type === "spend" || type === "withdraw" || type === "repayment" ? "out" : "in"
  }) : points != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4,
      alignItems: "center",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--grape-700)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 14
  }), points) : null);
}
Object.assign(__ds_scope, { ACTIVITY_TYPES, ActivityRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/ActivityRow.jsx", error: String((e && e.message) || e) }); }

// components/wallet/BalanceCard.jsx
try { (() => {
/** Hero wallet balance. The anchor of both Home screens. */
function BalanceCard({
  owner = "Your wallet",
  balance = 0,
  caption,
  chips = [],
  tone = "brand",
  children,
  style
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-6)",
      borderRadius: "var(--radius-2xl)",
      background: inverse ? "var(--surface-inverse)" : "var(--brand-primary-soft)",
      border: "2px solid " + (inverse ? "var(--teal-900)" : "var(--teal-200)"),
      boxShadow: "var(--shadow-sticker)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "piggy-bank",
    size: 150,
    color: inverse ? "rgba(255,255,255,0.08)" : "rgba(18,137,122,0.09)",
    style: {
      position: "absolute",
      right: -28,
      bottom: -34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: inverse ? "var(--teal-300)" : "var(--teal-800)"
    }
  }, owner), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: balance,
    size: "hero",
    direction: "neutral",
    style: {
      color: inverse ? "var(--paper)" : "var(--teal-900)"
    }
  })), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: "var(--text-body)",
      color: inverse ? "var(--teal-200)" : "var(--teal-800)",
      fontWeight: "var(--weight-semibold)"
    }
  }, caption) : null, chips.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      background: inverse ? "rgba(255,255,255,0.12)" : "var(--paper)",
      color: inverse ? "var(--paper)" : "var(--teal-900)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)"
    }
  }, c.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: 14
  }) : null, c.label))) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { BalanceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/BalanceCard.jsx", error: String((e && e.message) || e) }); }

// components/wallet/LoanCard.jsx
try { (() => {
/** A loan and its repayment progress. */
function LoanCard({
  reason,
  borrowed = 0,
  repaid = 0,
  dueLabel,
  status = "on-track",
  children,
  style
}) {
  const left = Math.max(0, borrowed - repaid);
  const statusMap = {
    "on-track": {
      tone: "teal",
      label: "On track",
      icon: "check"
    },
    "due-soon": {
      tone: "sun",
      label: "Due soon",
      icon: "clock"
    },
    overdue: {
      tone: "berry",
      label: "Overdue",
      icon: "triangle-alert"
    },
    paid: {
      tone: "success",
      label: "Paid off",
      icon: "check-check"
    }
  };
  const s = statusMap[status] || statusMap["on-track"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--sun-100)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hand-coins",
    size: 22,
    color: "var(--sun-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, reason), dueLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, dueLabel) : null)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: s.tone,
    icon: s.icon
  }, s.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    tone: status === "overdue" ? "berry" : "sun",
    value: repaid,
    max: borrowed,
    label: status === "paid" ? "All paid back" : "Still to pay back",
    valueLabel: "$" + left.toFixed(2) + " of $" + borrowed.toFixed(2)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eddy-label",
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Borrowed"), /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: borrowed,
    direction: "neutral"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Paid back"), /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: repaid,
    direction: "in"
  }))), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, children) : null);
}
Object.assign(__ds_scope, { LoanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/LoanCard.jsx", error: String((e && e.message) || e) }); }

// components/wallet/ParentOnlyChip.jsx
try { (() => {
/** The parent-only marker. Every parent privilege is flagged wherever it appears. */
function ParentOnlyChip({
  label = "Parent only",
  variant = "chip",
  style
}) {
  if (variant === "banner") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center",
        padding: "10px 14px",
        background: "var(--surface-parent)",
        border: "1px solid var(--sky-200)",
        borderRadius: "var(--radius-md)",
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "shield-check",
      size: 18,
      color: "var(--state-locked)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-bold)",
        color: "var(--sky-700)"
      }
    }, label));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4,
      alignItems: "center",
      padding: "3px 9px",
      borderRadius: "var(--radius-pill)",
      background: "var(--state-locked-soft)",
      color: "var(--state-locked)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 11,
    strokeWidth: 2.5
  }), label);
}
Object.assign(__ds_scope, { ParentOnlyChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/ParentOnlyChip.jsx", error: String((e && e.message) || e) }); }

// components/wallet/StatTile.jsx
try { (() => {
/** Compact metric tile for the Parent dashboard. */
function StatTile({
  label,
  value,
  money,
  delta,
  icon,
  tone = "neutral",
  style
}) {
  const tint = {
    neutral: "var(--ink-100)",
    teal: "var(--teal-100)",
    sun: "var(--sun-100)",
    berry: "var(--berry-100)",
    sky: "var(--sky-100)"
  }[tone] || "var(--ink-100)";
  const ink = {
    neutral: "var(--ink-600)",
    teal: "var(--teal-800)",
    sun: "var(--sun-700)",
    berry: "var(--berry-700)",
    sky: "var(--sky-700)"
  }[tone] || "var(--ink-600)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 28,
      height: 28,
      borderRadius: "var(--radius-xs)",
      background: tint
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: ink
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, money != null ? /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: money,
    size: "lg",
    direction: "neutral"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, value)), delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/StatTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/ChildActivity.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Card,
  ActivityRow,
  EmptyState,
  Icon
} = window.EddyWalletDesignSystem_7e6d2a;
const FILTERS = ["All", "Allowance", "Spending", "Loans", "Lessons"];
const MATCH = {
  Allowance: ["allowance", "deposit", "interest"],
  Spending: ["spend", "withdraw"],
  Loans: ["loan", "repayment"],
  Lessons: ["lesson"]
};
function ChildActivity() {
  const [filter, setFilter] = React.useState("All");
  const rows = filter === "All" ? ACTIVITY : ACTIVITY.filter(a => MATCH[filter].includes(a.type));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: FILTERS,
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 15
  }), "Everything here is visible to you and your parent."), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)"
  }, rows.length ? rows.map((a, i) => /*#__PURE__*/React.createElement(ActivityRow, _extends({
    key: a.id
  }, a, {
    style: i === rows.length - 1 ? {
      borderBottom: "none"
    } : undefined
  }))) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "funnel",
    title: "Nothing of that kind yet",
    description: "Try another filter \u2014 or come back after Sunday."
  })));
}
window.ChildActivity = ChildActivity;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/ChildActivity.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/ChildHome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  BalanceCard,
  Card,
  SectionHeading,
  ActivityRow,
  ProgressBar,
  Button,
  Icon,
  LessonCard
} = window.EddyWalletDesignSystem_7e6d2a;
function ChildHome({
  onNav,
  onRequest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(BalanceCard, {
    owner: "Mia's wallet",
    balance: CHILD.balance,
    caption: "Allowance lands Sunday \u2014 3 days to go.",
    chips: [{
      icon: "hand-coins",
      label: "$" + CHILD.allowance + " weekly"
    }, {
      icon: "percent",
      label: CHILD.interest + "% on savings"
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "arrow-up-right",
    fullWidth: true,
    onClick: onRequest
  }, "Ask to spend"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "list",
    fullWidth: true,
    onClick: () => onNav("activity")
  }, "Activity"))), /*#__PURE__*/React.createElement(Card, {
    sticker: true,
    radius: "var(--radius-xl)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    title: "Saving for a " + GOAL.name.toLowerCase(),
    subtitle: "You're over halfway there."
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: GOAL.saved,
    max: GOAL.target,
    valueLabel: "$" + GOAL.saved.toFixed(2) + " of $" + GOAL.target
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      marginTop: "var(--space-3)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 15,
    color: "var(--sun-600)"
  }), "You saved $" + CHILD.savedThisMonth + " this month — your best yet.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "What happened lately",
    action: "See all",
    onAction: () => onNav("activity")
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)"
  }, ACTIVITY.slice(0, 4).map((a, i) => /*#__PURE__*/React.createElement(ActivityRow, _extends({
    key: a.id
  }, a, {
    style: i === 3 ? {
      borderBottom: "none"
    } : undefined
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Keep learning",
    subtitle: "One lesson unlocks the next",
    action: "All lessons",
    onAction: () => onNav("lessons")
  }), /*#__PURE__*/React.createElement(LessonCard, _extends({
    index: 3
  }, LESSONS[2], {
    onClick: () => onNav("lessons")
  }))));
}
window.ChildHome = ChildHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/ChildHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/ChildLessons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  LessonCard,
  Card,
  Button,
  ProgressBar,
  Toast,
  Icon,
  Badge
} = window.EddyWalletDesignSystem_7e6d2a;
function ChildLessons() {
  const [open, setOpen] = React.useState(null);
  const [doneIds, setDoneIds] = React.useState([1, 2]);
  const [toast, setToast] = React.useState(false);
  const lessons = LESSONS.map(l => ({
    ...l,
    state: doneIds.includes(l.id) ? "done" : l.state === "locked" && doneIds.includes(l.id - 1) ? "available" : l.state
  }));
  const lesson = open ? lessons.find(l => l.id === open) : null;
  if (lesson) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)",
        paddingTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "chevron-left",
      onClick: () => setOpen(null),
      style: {
        justifySelf: "start"
      }
    }, "All lessons"), /*#__PURE__*/React.createElement(Card, {
      sticker: true,
      radius: "var(--radius-xl)",
      tone: "brand"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "grape",
      icon: "lightbulb"
    }, "Lesson " + String(lesson.id).padStart(2, "0")), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: "var(--space-3)",
        fontSize: "var(--text-h1)"
      }
    }, lesson.title), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 4,
        marginBottom: 0,
        color: "var(--teal-800)",
        fontWeight: 600
      }
    }, lesson.blurb)), (lesson.body || ["This lesson is still being written."]).map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: "var(--text-body-lg)",
        lineHeight: "var(--lh-body-lg)",
        margin: 0
      }
    }, p)), /*#__PURE__*/React.createElement(Card, {
      tone: "sunken",
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "coins",
      size: 24,
      color: "var(--sun-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Try it:"), " leave $10 in your wallet all month and check back. Eddy will add 20 cents."))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      icon: "check",
      fullWidth: true,
      onClick: () => {
        setDoneIds(d => d.includes(lesson.id) ? d : [...d, lesson.id]);
        setToast(true);
        setOpen(null);
        setTimeout(() => setToast(false), 2600);
      }
    }, "I've read it"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      paddingTop: "var(--space-2)"
    }
  }, toast ? /*#__PURE__*/React.createElement(Toast, {
    celebrate: true,
    message: "Lesson done!",
    detail: "The next one just unlocked."
  }) : null, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "grape",
    label: "Your learning track",
    value: doneIds.length,
    max: LESSONS.length,
    valueLabel: doneIds.length + " of " + LESSONS.length
  })), lessons.map((l, i) => /*#__PURE__*/React.createElement(LessonCard, _extends({
    key: l.id,
    index: i + 1
  }, l, {
    onClick: () => setOpen(l.id)
  }))));
}
window.ChildLessons = ChildLessons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/ChildLessons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/ChildLoans.jsx
try { (() => {
const {
  LoanCard,
  Card,
  SectionHeading,
  ActivityRow,
  ParentOnlyChip,
  Icon
} = window.EddyWalletDesignSystem_7e6d2a;
function ChildLoans() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(LoanCard, LOAN), /*#__PURE__*/React.createElement(Card, {
    tone: "parent",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--state-locked)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--sky-700)"
    }
  }, "Only a parent can change a loan"), /*#__PURE__*/React.createElement(ParentOnlyChip, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--sky-700)",
      marginTop: 2
    }
  }, "Ask Dad if you want to pay it back faster. You can always see it here.")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Payments so far",
    subtitle: "$2 comes out automatically each Sunday"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)"
  }, ["9 March", "2 March", "24 Feb", "17 Feb", "10 Feb", "3 Feb"].map((d, i, arr) => /*#__PURE__*/React.createElement(ActivityRow, {
    key: d,
    type: "repayment",
    title: "Lego loan payment",
    meta: d + " · automatic",
    amount: 2,
    style: i === arr.length - 1 ? {
      borderBottom: "none"
    } : undefined
  })))));
}
window.ChildLoans = ChildLoans;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/ChildLoans.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/Entry.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  PinPad
} = window.EddyWalletDesignSystem_7e6d2a;
function RolePicker({
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      alignContent: "center",
      gap: "var(--space-6)",
      padding: "var(--space-8) var(--gutter-mobile)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: "-0.02em",
      color: "var(--teal-900)"
    }
  }, "eddy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-primary)"
    }
  }, "wallet")), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--text-display-2)",
      lineHeight: "var(--lh-display-2)"
    }
  }, "Who's using Eddy?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-2)",
      color: "var(--text-muted)"
    }
  }, "One wallet, shared on this device.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, [{
    id: "child",
    label: "Mia",
    note: "Child Mode · needs your PIN",
    icon: "piggy-bank",
    tint: "var(--brand-primary-soft)",
    ink: "var(--teal-800)",
    border: "var(--teal-200)"
  }, {
    id: "parent",
    label: "Parent",
    note: "Deposits, rules and approvals",
    icon: "shield-check",
    tint: "var(--surface-parent)",
    ink: "var(--sky-700)",
    border: "var(--sky-200)"
  }].map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    onClick: () => onPick(r.id),
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      textAlign: "left",
      padding: "var(--space-5)",
      background: r.tint,
      border: "2px solid " + r.border,
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-sticker)",
      cursor: "pointer",
      font: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 60,
      height: 60,
      borderRadius: "var(--radius-xl)",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 30,
    color: r.ink
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-h1)",
      color: "var(--text-heading)"
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      color: r.ink,
      fontWeight: 600
    }
  }, r.note)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22,
    color: r.ink,
    style: {
      marginLeft: "auto"
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Eddy Wallet tracks allowance only \u2014 no real money ever moves."));
}
function PinUnlock({
  onDone,
  onBack
}) {
  const [pin, setPin] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    if (pin.length === 4) {
      if (pin === "1234") onDone();else {
        setError("That's not it. Try again!");
        setTimeout(() => {
          setPin("");
        }, 500);
      }
    } else if (error) setError("");
  }, [pin]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      alignContent: "center",
      justifyItems: "center",
      gap: "var(--space-6)",
      padding: "var(--space-8) var(--gutter-mobile)",
      minHeight: "100vh",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 64,
      height: 64,
      borderRadius: "var(--radius-xl)",
      background: "var(--brand-primary-soft)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock-open",
    size: 30,
    color: "var(--brand-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)"
    }
  }, "Hi Mia! What's your PIN?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Hint for this demo: 1234")), /*#__PURE__*/React.createElement(PinPad, {
    value: pin,
    onChange: setPin,
    error: error
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "chevron-left",
    onClick: onBack
  }, "Not Mia"));
}
Object.assign(window, {
  RolePicker,
  PinUnlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/Entry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/app.jsx
try { (() => {
const {
  TopBar,
  TabBar,
  IconButton,
  Dialog,
  AmountField,
  Input,
  Toast,
  Icon
} = window.EddyWalletDesignSystem_7e6d2a;
const TABS = [{
  id: "home",
  label: "Wallet",
  icon: "wallet"
}, {
  id: "activity",
  label: "Activity",
  icon: "list"
}, {
  id: "loans",
  label: "Loans",
  icon: "hand-coins"
}, {
  id: "lessons",
  label: "Learn",
  icon: "graduation-cap"
}];
const TITLES = {
  home: ["Hi, Mia!", "Tuesday, 18 March"],
  activity: ["Your activity", "Every move your money made"],
  loans: ["Your loan", "Read-only — a parent sets the rules"],
  lessons: ["Learn", "6 short lessons about money"]
};
function App() {
  const [stage, setStage] = React.useState("role");
  const [tab, setTab] = React.useState("home");
  const [ask, setAsk] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  if (stage === "role") return /*#__PURE__*/React.createElement("div", {
    className: "eddy-shell"
  }, /*#__PURE__*/React.createElement(RolePicker, {
    onPick: r => setStage(r === "child" ? "pin" : "parent")
  }));
  if (stage === "pin") return /*#__PURE__*/React.createElement("div", {
    className: "eddy-shell"
  }, /*#__PURE__*/React.createElement(PinUnlock, {
    onDone: () => setStage("app"),
    onBack: () => setStage("role")
  }));
  if (stage === "parent") return /*#__PURE__*/React.createElement("div", {
    className: "eddy-shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      alignContent: "center",
      justifyItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-8)",
      minHeight: "100vh",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 40,
    color: "var(--state-locked)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)"
    }
  }, "Parent Mode lives in its own kit"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Open ui_kits/parent_mode/index.html for the parent dashboard, rules and approvals."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStage("role"),
    style: {
      background: "none",
      border: "none",
      color: "var(--text-link)",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Back")));
  const title = TITLES[tab][0],
    subtitle = TITLES[tab][1];
  return /*#__PURE__*/React.createElement("div", {
    className: "eddy-shell"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    subtitle: subtitle,
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "log-out",
      label: "Switch user",
      onClick: () => setStage("role")
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "eddy-scroll"
  }, tab === "home" ? /*#__PURE__*/React.createElement(ChildHome, {
    onNav: setTab,
    onRequest: () => setAsk(true)
  }) : null, tab === "activity" ? /*#__PURE__*/React.createElement(ChildActivity, null) : null, tab === "loans" ? /*#__PURE__*/React.createElement(ChildLoans, null) : null, tab === "lessons" ? /*#__PURE__*/React.createElement(ChildLessons, null) : null), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-4)",
      right: "var(--space-4)",
      bottom: 96,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "info",
    message: "Sent to Dad",
    detail: "You'll see it in your activity as soon as he says yes."
  })) : null, /*#__PURE__*/React.createElement(TabBar, {
    items: TABS,
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Dialog, {
    open: ask,
    title: "Ask to spend",
    icon: "arrow-up-right",
    description: "Dad gets a note. Nothing leaves your wallet until he says yes.",
    confirmLabel: "Send it",
    cancelLabel: "Never mind",
    onConfirm: () => {
      setAsk(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    },
    onClose: () => setAsk(false)
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: "How much?",
    value: "4.25",
    max: CHILD.balance
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What's it for?",
    defaultValue: "Comic book",
    icon: "gift"
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/child_mode/data.js
try { (() => {
const CHILD = {
  name: "Mia",
  balance: 42.5,
  allowance: 5,
  interest: 2,
  savedThisMonth: 8
};
const ACTIVITY = [{
  id: 1,
  type: "allowance",
  title: "Weekly allowance",
  meta: "Sunday · from Dad",
  amount: 5
}, {
  id: 2,
  type: "spend",
  title: "Comic book",
  meta: "Tuesday · waiting on Dad",
  amount: 4.25,
  pending: true
}, {
  id: 3,
  type: "interest",
  title: "Savings interest",
  meta: "1 March · 2% on $40",
  amount: 0.8
}, {
  id: 4,
  type: "lesson",
  title: "Saving vs. spending",
  meta: "Finished Monday",
  points: 10
}, {
  id: 5,
  type: "repayment",
  title: "Lego loan payment",
  meta: "Sunday · automatic",
  amount: 2
}, {
  id: 6,
  type: "allowance",
  title: "Weekly allowance",
  meta: "Last Sunday · from Dad",
  amount: 5
}, {
  id: 7,
  type: "spend",
  title: "Ice cream",
  meta: "Saturday · logged by Mia",
  amount: 3.5
}, {
  id: 8,
  type: "loan",
  title: "Borrowed for a Lego set",
  meta: "2 March · from Dad",
  amount: 20
}, {
  id: 9,
  type: "deposit",
  title: "Birthday money",
  meta: "28 Feb · from Grandma",
  amount: 15
}];
const LESSONS = [{
  id: 1,
  title: "What's in a wallet?",
  blurb: "Your balance is just what's left.",
  minutes: 2,
  state: "done"
}, {
  id: 2,
  title: "Saving vs. spending",
  blurb: "Why waiting can get you more.",
  minutes: 4,
  state: "done"
}, {
  id: 3,
  title: "What is interest?",
  blurb: "Money that grows while it waits.",
  minutes: 3,
  state: "available",
  body: ["When you leave money in your wallet instead of spending it, Eddy adds a little extra. That extra is called interest.", "Mia leaves $40 in her wallet for a month. Eddy adds 2% — that's 80 cents. She didn't do anything. The waiting did the work.", "The longer money waits, the more it grows. That's why saving beats spending everything right away."]
}, {
  id: 4,
  title: "Borrowing and paying back",
  blurb: "A loan is a promise.",
  minutes: 4,
  state: "locked"
}, {
  id: 5,
  title: "Needs and wants",
  blurb: "Both are fine. They're different.",
  minutes: 3,
  state: "locked"
}, {
  id: 6,
  title: "Making a plan",
  blurb: "Pick a goal, then split your money.",
  minutes: 5,
  state: "locked"
}];
const LOAN = {
  reason: "Lego set",
  borrowed: 20,
  repaid: 12,
  dueLabel: "$2 every Sunday · 4 payments left",
  status: "on-track"
};
const GOAL = {
  name: "Skateboard",
  target: 80,
  saved: 42.5
};
Object.assign(window, {
  CHILD,
  ACTIVITY,
  LESSONS,
  LOAN,
  GOAL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/child_mode/data.js", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/AllowanceRules.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  AmountField,
  Select,
  Switch,
  Checkbox,
  Button,
  ParentOnlyChip,
  Toast,
  Badge,
  Icon,
  LoanCard,
  ProgressBar
} = window.EddyWalletDesignSystem_7e6d2a;
function AllowanceRules() {
  const [amount, setAmount] = React.useState("5.00");
  const [approval, setApproval] = React.useState(true);
  const [interest, setInterest] = React.useState(true);
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Allowance",
    subtitle: "Applies from the next payment onward"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: "Amount",
    value: amount,
    onChange: e => setAmount(e.target.value),
    hint: "Mia sees this as '$5 weekly' on her wallet."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "How often",
    options: ["Every Sunday", "Every other Sunday", "1st of the month", "15th and 30th"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Pause allowance while a loan is overdue",
    description: "Eddy tells Mia why, in kid language."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    onClick: () => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2400);
    }
  }, "Save rules"), /*#__PURE__*/React.createElement(ParentOnlyChip, null)), saved ? /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: "Rules saved",
    detail: "Mia's wallet updates right away."
  }) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "parent"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Controls",
    subtitle: "Mia can see these; only you can change them"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Require approval to spend",
    description: "Requests wait in Parent-only actions.",
    parentOnly: true,
    checked: approval,
    onChange: () => setApproval(v => !v)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Pay interest on savings",
    description: "2% monthly on the balance left untouched.",
    parentOnly: true,
    checked: interest,
    onChange: () => setInterest(v => !v)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Let Mia log spending herself",
    description: "You review it afterwards instead of before.",
    parentOnly: true,
    checked: false
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Loan rules",
    subtitle: "One active loan at a time"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Repayment",
    options: ["$2 from each allowance", "$5 from each allowance", "Half of each allowance"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sun",
    icon: "triangle-alert"
  }, "Undecided"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Late-repayment behaviour is still an open product question."))))));
}
function ParentLoans({
  onNav
}) {
  const {
    Card: C
  } = window.EddyWalletDesignSystem_7e6d2a;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(LoanCard, LOAN, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "pencil"
  }, "Change terms"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check-check"
  }, "Mark as paid off"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "New loan",
    subtitle: "Mia asks; you decide the terms"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: "Amount to lend",
    value: "",
    hint: "Comes out of your deposits, not Mia's balance."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Pay back",
    options: ["$2 from each allowance", "$5 from each allowance", "In one payment"]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "hand-coins",
    fullWidth: true
  }, "Create loan"))), /*#__PURE__*/React.createElement(C, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    title: "What Mia sees",
    subtitle: "Read-only, with the same numbers"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "sun",
    value: 12,
    max: 20,
    label: "Still to pay back",
    valueLabel: "$8.00 of $20.00"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      marginTop: "var(--space-3)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 15
  }), "Transparency by default: the child sees every rule that affects her."))));
}
Object.assign(window, {
  AllowanceRules,
  ParentLoans
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/AllowanceRules.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/FamilySetup.jsx
try { (() => {
const {
  Card,
  SectionHeading,
  Input,
  AmountField,
  Select,
  Button,
  PinPad,
  Badge,
  Icon,
  ParentOnlyChip,
  Checkbox
} = window.EddyWalletDesignSystem_7e6d2a;
function FamilySetup() {
  const [step, setStep] = React.useState(1);
  const [pin, setPin] = React.useState("");
  const steps = ["Your account", "Add a child", "Set a PIN", "First rules"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    onClick: () => setStep(i + 1),
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      border: "2px solid " + (step === i + 1 ? "var(--teal-800)" : "var(--border-subtle)"),
      background: step === i + 1 ? "var(--brand-primary)" : "var(--surface-card)",
      color: step === i + 1 ? "#fff" : "var(--text-muted)",
      font: "inherit",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, i + 1), s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Create the family account",
    subtitle: "You hold the account. Children unlock it with a PIN."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    defaultValue: "Dad",
    icon: "user"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    defaultValue: "dad@example.com",
    type: "email",
    hint: "Used for approval notices only."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I understand v1 stores everything in this browser",
    description: "No sync, no backup. Clearing browser data loses the wallet history.",
    checked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "chevron-right",
    onClick: () => setStep(2)
  }, "Next")) : step === 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Add a child",
    subtitle: "One child per wallet in v1."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Child's name",
    defaultValue: "Mia",
    icon: "user",
    hint: "Shown at the top of her wallet."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Age",
    options: ["7", "8", "9", "10", "11", "12"]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "chevron-right",
    onClick: () => setStep(3)
  }, "Next")) : step === 3 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Set Mia's PIN",
    subtitle: "Four numbers she can remember. You can reset it any time.",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement(PinPad, {
    value: pin,
    onChange: setPin
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "chevron-right",
    fullWidth: true,
    disabled: pin.length < 4,
    onClick: () => setStep(4)
  }, "Next")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "First rules",
    subtitle: "You can change all of this later."
  }), /*#__PURE__*/React.createElement(AmountField, {
    label: "Weekly allowance",
    value: "5.00"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Paid",
    options: ["Every Sunday", "Every other Sunday", "1st of the month"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Require approval before Mia spends",
    checked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "party-popper"
  }, "Finish setup"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    title: "What Eddy Wallet is"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, [["piggy-bank", "A virtual wallet for allowance. No real money ever moves."], ["users", "One shared wallet: you deposit and set rules, your child tracks and learns."], ["graduation-cap", "Short lessons unlock as your child goes — balance, loans, interest."], ["triangle-alert", "v1 data lives in this browser only. No sync, no recovery."]].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--brand-primary)",
    style: {
      marginTop: 2
    }
  }), t)))), /*#__PURE__*/React.createElement(Card, {
    tone: "parent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ParentOnlyChip, null), /*#__PURE__*/React.createElement(Badge, {
    tone: "sun",
    icon: "triangle-alert"
  }, "Undecided")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--sky-700)",
      marginTop: "var(--space-3)"
    }
  }, "Second child and second guardian are open questions \u2014 this flow assumes one of each.")))));
}
window.FamilySetup = FamilySetup;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/FamilySetup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/ParentActions.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  SectionHeading,
  Button,
  Dialog,
  AmountField,
  Input,
  Select,
  ParentOnlyChip,
  ActivityRow,
  Toast,
  Icon,
  Badge,
  EmptyState,
  Switch
} = window.EddyWalletDesignSystem_7e6d2a;
function ParentActions({
  deposit,
  setDeposit
}) {
  const [queue, setQueue] = React.useState(PENDING);
  const [toast, setToast] = React.useState(null);
  const [confirm, setConfirm] = React.useState(null);
  const resolve = (id, ok) => {
    const item = queue.find(q => q.id === id);
    setQueue(q => q.filter(x => x.id !== id));
    setToast(ok ? {
      tone: "success",
      message: "Approved",
      detail: item.title + " · $" + item.amount.toFixed(2) + " left Mia's wallet"
    } : {
      tone: "info",
      message: "Declined",
      detail: "Mia sees a short note, not a rejection."
    });
    setTimeout(() => setToast(null), 2800);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(ParentOnlyChip, {
    variant: "banner",
    label: "Everything on this screen is parent-only. Mia can see that it exists \u2014 she can't act on it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Approval queue",
    subtitle: queue.length + " waiting"
  }), queue.length ? queue.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      padding: "var(--space-4) 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(ActivityRow, _extends({}, item, {
    style: {
      borderBottom: "none",
      padding: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    icon: "check",
    onClick: () => resolve(item.id, true)
  }, "Approve"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "x",
    onClick: () => resolve(item.id, false)
  }, "Decline"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "info"
  }, "Ask Mia about it")))) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "check-check",
    title: "All caught up",
    description: "New requests from Mia land here."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Move money",
    subtitle: "Virtual balance only"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    fullWidth: true,
    onClick: () => setDeposit(true)
  }, "Deposit to Mia's wallet"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "minus",
    fullWidth: true,
    onClick: () => setConfirm("withdraw")
  }, "Withdraw from Mia's wallet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "flex-start",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 15,
    style: {
      marginTop: 2
    }
  }), "Every move shows up in Mia's activity with your name on it."))), /*#__PURE__*/React.createElement(Card, {
    tone: "parent"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Account controls"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Mia can use Child Mode",
    description: "Turning this off hides the wallet from the role picker.",
    parentOnly: true,
    checked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Show interest in Child Mode",
    parentOnly: true,
    checked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "rotate-ccw"
  }, "Reset PIN"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "trash"
  }, "Remove child")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sun",
    icon: "triangle-alert"
  }, "Undecided"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--sky-700)"
    }
  }, "PIN re-authentication flow is an open question."))))), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-6)",
      bottom: "var(--space-6)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, toast)) : null, /*#__PURE__*/React.createElement(Dialog, {
    open: deposit,
    title: "Deposit to Mia's wallet",
    icon: "plus",
    tone: "parent",
    parentOnly: true,
    description: "Adds to her virtual balance. She'll see it in her activity straight away.",
    confirmLabel: "Add it",
    onConfirm: () => {
      setDeposit(false);
      setToast({
        tone: "success",
        message: "Deposit added",
        detail: "$10.00 to Mia's wallet"
      });
      setTimeout(() => setToast(null), 2800);
    },
    onClose: () => setDeposit(false)
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: "How much?",
    value: "10.00"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Note for Mia",
    defaultValue: "Helping Grandma with the garden",
    icon: "pencil"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Count it as",
    options: ["Extra (one-off)", "Chore bonus", "Gift from family"]
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm === "withdraw",
    title: "Withdraw $5.00?",
    icon: "minus",
    tone: "danger",
    parentOnly: true,
    description: "Mia's balance goes from $42.50 to $37.50. The entry appears in her activity with your name on it.",
    confirmLabel: "Withdraw",
    onConfirm: () => {
      setConfirm(null);
      setToast({
        tone: "info",
        message: "Withdrawal logged",
        detail: "Mia's balance is now $37.50"
      });
      setTimeout(() => setToast(null), 2800);
    },
    onClose: () => setConfirm(null)
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: "How much?",
    value: "5.00",
    max: 42.5
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Reason (Mia sees this)",
    defaultValue: "Cash for the school fair"
  })));
}
window.ParentActions = ParentActions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/ParentActions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/ParentActivity.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Card,
  ActivityRow,
  Input,
  Select,
  SectionHeading,
  EmptyState
} = window.EddyWalletDesignSystem_7e6d2a;
const MATCH = {
  Allowance: ["allowance"],
  Deposits: ["deposit", "interest"],
  Spending: ["spend", "withdraw"],
  Loans: ["loan", "repayment"],
  Lessons: ["lesson"]
};
function ParentActivity() {
  const [filter, setFilter] = React.useState("All");
  const [q, setQ] = React.useState("");
  let rows = filter === "All" ? LEDGER : LEDGER.filter(l => MATCH[filter].includes(l.type));
  if (q) rows = rows.filter(l => l.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search activity",
    icon: "search",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      flex: 1,
      minWidth: 220
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ["Last 30 days", "This month", "Last 3 months", "All time"],
    style: {
      width: 180
    }
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: ["All", "Allowance", "Deposits", "Spending", "Loans", "Lessons"],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    title: rows.length + " entries",
    subtitle: "Parent-only entries are flagged with a lock"
  }), rows.length ? rows.map((l, i) => /*#__PURE__*/React.createElement(ActivityRow, _extends({
    key: l.id
  }, l, {
    style: i === rows.length - 1 ? {
      borderBottom: "none"
    } : undefined
  }))) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "funnel",
    title: "No entries match",
    description: "Clear the search or pick another filter."
  })));
}
window.ParentActivity = ParentActivity;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/ParentActivity.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/ParentDashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  BalanceCard,
  StatTile,
  Card,
  SectionHeading,
  ActivityRow,
  Button,
  LoanCard,
  ProgressBar,
  ParentOnlyChip,
  Icon
} = window.EddyWalletDesignSystem_7e6d2a;
function ParentDashboard({
  onNav,
  onDeposit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(BalanceCard, {
    owner: FAMILY.child + "'s wallet",
    balance: FAMILY.balance,
    caption: "Virtual balance only — no real money moves. Next allowance: Sunday, $" + FAMILY.allowance + ".",
    chips: [{
      icon: "repeat",
      label: FAMILY.cadence
    }, {
      icon: "percent",
      label: FAMILY.interest + "% on savings"
    }, {
      icon: "hand-coins",
      label: "1 active loan"
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: onDeposit
  }, "Deposit"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "minus",
    onClick: () => onNav("actions")
  }, "Withdraw"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "chevron-right",
    onClick: () => onNav("actions")
  }, "Parent-only actions"))), /*#__PURE__*/React.createElement(Card, {
    tone: "parent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: "var(--sky-700)"
    }
  }, "Waiting on you"), /*#__PURE__*/React.createElement(ParentOnlyChip, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      marginTop: "var(--space-4)"
    }
  }, PENDING.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      padding: "var(--space-3)",
      background: "var(--paper)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 18,
    color: "var(--berry-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-heading)"
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, p.meta)), /*#__PURE__*/React.createElement("span", {
    className: "eddy-money",
    style: {
      color: "var(--money-out)"
    }
  }, "$" + p.amount.toFixed(2))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    icon: "check-check",
    style: {
      marginTop: "var(--space-4)"
    },
    onClick: () => onNav("actions")
  }, "Review requests"))), /*#__PURE__*/React.createElement("div", {
    className: "p-grid"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Allowance paid",
    money: 20,
    delta: "4 payments this month",
    icon: "hand-coins",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Spent this month",
    money: 18.75,
    delta: "Across 4 purchases",
    icon: "arrow-up-right",
    tone: "berry"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Interest earned",
    money: 0.8,
    delta: "2% on the savings balance",
    icon: "percent",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Lessons done",
    value: "2 of 6",
    delta: "Interest is up next",
    icon: "graduation-cap",
    tone: "sky"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Recent activity",
    subtitle: "One row shape for every kind of event",
    action: "See all",
    onAction: () => onNav("activity")
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)"
  }, LEDGER.slice(0, 6).map((l, i) => /*#__PURE__*/React.createElement(ActivityRow, _extends({
    key: l.id
  }, l, {
    style: i === 5 ? {
      borderBottom: "none"
    } : undefined
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(LoanCard, LOAN), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    title: "Lesson progress",
    subtitle: "Read-only monitor view"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "grape",
    value: 2,
    max: 6,
    valueLabel: "2 of 6"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: "var(--space-3)"
    }
  }, "Mia finished \"Saving vs. spending\" on Monday. You can see lessons but not mark them done.")))));
}
window.ParentDashboard = ParentDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/ParentDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/Sidebar.jsx
try { (() => {
const {
  Icon,
  Badge,
  MoneyAmount
} = window.EddyWalletDesignSystem_7e6d2a;
const NAV = [{
  id: "dashboard",
  label: "Dashboard",
  icon: "house"
}, {
  id: "activity",
  label: "Activity",
  icon: "list"
}, {
  id: "rules",
  label: "Allowance rules",
  icon: "repeat"
}, {
  id: "loans",
  label: "Loans & repayments",
  icon: "hand-coins"
}, {
  id: "lessons",
  label: "Lessons",
  icon: "graduation-cap"
}, {
  id: "actions",
  label: "Parent-only actions",
  icon: "lock",
  count: PENDING.length
}, {
  id: "setup",
  label: "Family setup",
  icon: "users"
}];
function Sidebar({
  value,
  onChange,
  onExit
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--space-6) var(--space-5)",
      background: "var(--surface-card)",
      borderRight: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: "var(--teal-900)"
    }
  }, "eddy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-primary)"
    }
  }, "wallet")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      background: "var(--surface-parent)",
      border: "1px solid var(--sky-200)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      fontSize: "var(--text-xs)",
      fontWeight: 800,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--sky-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 13
  }), "Parent Mode"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, FAMILY.child, "'s wallet"), /*#__PURE__*/React.createElement(MoneyAmount, {
    value: FAMILY.balance,
    size: "lg",
    direction: "neutral"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, NAV.map(n => {
    const active = n.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      type: "button",
      onClick: () => onChange(n.id),
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "center",
        padding: "10px 12px",
        minHeight: 44,
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: active ? "var(--brand-primary-soft)" : "transparent",
        color: active ? "var(--teal-800)" : "var(--text-body)",
        font: "inherit",
        fontWeight: active ? 700 : 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.count ? /*#__PURE__*/React.createElement(Badge, {
      tone: "sun"
    }, n.count) : null);
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onExit,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginTop: "auto",
      padding: "10px 12px",
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      font: "inherit",
      fontWeight: 600,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 18
  }), "Switch user"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TopBar,
  Card,
  SectionHeading,
  LessonCard,
  ProgressBar,
  ParentOnlyChip,
  IconButton,
  Icon
} = window.EddyWalletDesignSystem_7e6d2a;
const HEAD = {
  dashboard: ["Mia's wallet", "Tuesday, 18 March · 2 requests waiting"],
  activity: ["Activity", "Every entry in the family ledger"],
  rules: ["Allowance rules", "What Eddy pays, and when"],
  loans: ["Loans & repayments", "One active loan"],
  lessons: ["Lessons", "Monitor view — read-only"],
  actions: ["Parent-only actions", "Approvals, deposits and account controls"],
  setup: ["Family setup", "First-run flow"]
};
function ParentLessons() {
  const lessons = [{
    title: "What's in a wallet?",
    blurb: "Your balance is just what's left.",
    minutes: 2,
    state: "done"
  }, {
    title: "Saving vs. spending",
    blurb: "Why waiting can get you more.",
    minutes: 4,
    state: "done"
  }, {
    title: "What is interest?",
    blurb: "Money that grows while it waits.",
    minutes: 3,
    state: "available"
  }, {
    title: "Borrowing and paying back",
    blurb: "A loan is a promise.",
    minutes: 4,
    state: "locked"
  }, {
    title: "Needs and wants",
    blurb: "Both are fine. They're different.",
    minutes: 3,
    state: "locked"
  }, {
    title: "Making a plan",
    blurb: "Pick a goal, then split your money.",
    minutes: 5,
    state: "locked"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 300px",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, lessons.map((l, i) => /*#__PURE__*/React.createElement(LessonCard, _extends({
    key: l.title,
    index: i + 1
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h3",
    title: "Progress"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "grape",
    value: 2,
    max: 6,
    valueLabel: "2 of 6"
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "parent"
  }, /*#__PURE__*/React.createElement(ParentOnlyChip, {
    variant: "banner",
    label: "You can read every lesson \u2014 only Mia can mark one done."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "flex-start",
      fontSize: "var(--text-sm)",
      color: "var(--sky-700)",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 15,
    style: {
      marginTop: 2
    }
  }), "Lessons are the one place Eddy is deliberately not parent-controlled."))));
}
function App() {
  const [view, setView] = React.useState("dashboard");
  const [deposit, setDeposit] = React.useState(false);
  const head = HEAD[view];
  return /*#__PURE__*/React.createElement("div", {
    className: "p-shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    value: view,
    onChange: setView,
    onExit: () => setView("setup")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    mode: "parent",
    title: head[0],
    subtitle: head[1],
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Alerts"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings",
      label: "Settings"
    })),
    style: {
      padding: "18px var(--gutter-desktop)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-main",
    style: {
      paddingTop: "var(--space-6)"
    }
  }, view === "dashboard" ? /*#__PURE__*/React.createElement(ParentDashboard, {
    onNav: setView,
    onDeposit: () => {
      setView("actions");
      setDeposit(true);
    }
  }) : null, view === "activity" ? /*#__PURE__*/React.createElement(ParentActivity, null) : null, view === "rules" ? /*#__PURE__*/React.createElement(AllowanceRules, null) : null, view === "loans" ? /*#__PURE__*/React.createElement(ParentLoans, null) : null, view === "lessons" ? /*#__PURE__*/React.createElement(ParentLessons, null) : null, view === "actions" ? /*#__PURE__*/React.createElement(ParentActions, {
    deposit: deposit,
    setDeposit: setDeposit
  }) : null, view === "setup" ? /*#__PURE__*/React.createElement(FamilySetup, null) : null)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent_mode/data.js
try { (() => {
const FAMILY = {
  parent: "Dad",
  child: "Mia",
  balance: 42.5,
  allowance: 5,
  cadence: "Every Sunday",
  interest: 2
};
const LEDGER = [{
  id: 1,
  type: "spend",
  title: "Comic book",
  meta: "Today · Mia asked",
  amount: 4.25,
  pending: true
}, {
  id: 2,
  type: "spend",
  title: "Cinema ticket with Sam",
  meta: "Today · Mia asked",
  amount: 8,
  pending: true
}, {
  id: 3,
  type: "allowance",
  title: "Weekly allowance",
  meta: "Sun 16 Mar · automatic",
  amount: 5
}, {
  id: 4,
  type: "repayment",
  title: "Lego loan payment",
  meta: "Sun 16 Mar · automatic",
  amount: 2
}, {
  id: 5,
  type: "interest",
  title: "Savings interest",
  meta: "1 Mar · 2% on $40",
  amount: 0.8
}, {
  id: 6,
  type: "withdraw",
  title: "Cash for the school fair",
  meta: "Sat 8 Mar · by Dad",
  amount: 10,
  parentOnly: true
}, {
  id: 7,
  type: "lesson",
  title: "Saving vs. spending",
  meta: "Mon 10 Mar · marked done",
  points: 10
}, {
  id: 8,
  type: "loan",
  title: "Loan for a Lego set",
  meta: "2 Mar · approved by Dad",
  amount: 20,
  parentOnly: true
}, {
  id: 9,
  type: "deposit",
  title: "Birthday money",
  meta: "28 Feb · from Grandma",
  amount: 15,
  parentOnly: true
}, {
  id: 10,
  type: "spend",
  title: "Ice cream",
  meta: "22 Feb · logged after the fact",
  amount: 3.5
}];
const PENDING = LEDGER.filter(l => l.pending);
const LOAN = {
  reason: "Lego set",
  borrowed: 20,
  repaid: 12,
  dueLabel: "$2 every Sunday · 4 payments left",
  status: "on-track"
};
Object.assign(window, {
  FAMILY,
  LEDGER,
  PENDING,
  LOAN
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent_mode/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.AmountField = __ds_scope.AmountField;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PinPad = __ds_scope.PinPad;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.ACTIVITY_TYPES = __ds_scope.ACTIVITY_TYPES;

__ds_ns.ActivityRow = __ds_scope.ActivityRow;

__ds_ns.BalanceCard = __ds_scope.BalanceCard;

__ds_ns.LessonCard = __ds_scope.LessonCard;

__ds_ns.LoanCard = __ds_scope.LoanCard;

__ds_ns.MoneyAmount = __ds_scope.MoneyAmount;

__ds_ns.ParentOnlyChip = __ds_scope.ParentOnlyChip;

__ds_ns.StatTile = __ds_scope.StatTile;

})();
