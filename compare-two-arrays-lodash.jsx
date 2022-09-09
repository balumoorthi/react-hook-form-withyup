import { isEmpty, isEqual, xorWith } from "lodash";

export default {
  name: "App",

  mounted() {
    const x = [
      { a: 1, b: 2 },
      { c: 3, d: true },
    ];
    const y = [
     { a: 1, b: 2 },
      { c: 3, d: false },
    ];

    console.log(x, y);

    const isArrayEqual = (x, y) => isEmpty(xorWith(x, y, isEqual));
