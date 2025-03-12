/* empty css                                */
import { c as createComponent, f as renderComponent, e as renderTemplate } from '../chunks/astro/server_CPg43tOk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_xXXh8zZf.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "E:/programacion/Sanss/GAB/gab/src/pages/dashboard.astro", void 0);

const $$file = "E:/programacion/Sanss/GAB/gab/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
