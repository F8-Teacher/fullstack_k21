import "./style.css";
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { router } from "./libs/router";

renderHeader();

router.resolve();

renderFooter();

// router.on('/products', ({ params }) => {
//   console.log('Products');
//   console.log(params?.q);
// });

// router.on('/products/:id', ({ data: { id } }) => {
//   console.log('Products Detail');
//   console.log(`Id: ${id}`);
// });