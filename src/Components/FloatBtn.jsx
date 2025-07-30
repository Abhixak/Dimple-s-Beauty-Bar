import React from "react";
import { CommentOutlined, CustomerServiceOutlined, PhoneOutlined, ShoppingCartOutlined, UpOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
const App = () => (
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ insetInlineEnd: 24 }}
      icon={<UpOutlined />}
    >
      <FloatButton icon={<PhoneOutlined />} />
      <FloatButton icon={<ShoppingCartOutlined />} />
    </FloatButton.Group>
  </>
);
export default App;
