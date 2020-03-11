import BaseBlockContent from "@sanity/block-content-to-react";
import React from "react";
import clientConfig from "../../client-config";
import serializers from "./serializers";

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    className="mainContent"
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default BlockContent;
