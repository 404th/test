import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

function Article() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">Article</div>
          <p>Text here...</p>
        </Content>
        <Footer style={{ textAlign: "center" }}>Comments</Footer>
      </Layout>
    </>
  );
}

export default Article;
