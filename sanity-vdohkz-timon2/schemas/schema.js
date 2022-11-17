import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import productVdoh from "./product";
import bannerVdoh from "./banner";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([productVdoh, bannerVdoh]),
});
