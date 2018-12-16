<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.layout .ivu-layout{
    height: 100%;
    padding: 0;
}
.ivu-layout-has-sider{
    height: 100%;
}
.ivu-menu-vertical .ivu-menu-item:hover{
    background-color: #f1f1f1;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header style="position: relative;">
                <Dropdown trigger="click" style="margin-left: 20px;position: absolute;right:20px;">
                    <a href="javascript:void(0)">
                        <Avatar style="" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
                        <Icon style='transform: translateY(10px)' type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>帮助</DropdownItem>
                        <DropdownItem @click.native="modal1 = true">退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Header>
            <Layout>
                <Breadcrumb style="padding:16px 20px;background-color: #f1f1f1;">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content style="height:100%;">
                    <Layout>
                        <Sider style=" width:321px;background:rgb(255, 255, 255);">
                            <Menu width='auto' active-name="1-2" :open-names="['1']" style="height:100%;">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-analytics" />
                                        管理
                                    </template>
                                        <MenuItem name="1-1" to='/User'>用户管理</MenuItem>
                                        <MenuItem name="1-2" to='/List'>权限管理</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-filing" />
                                        权限管理
                                    </template>
                                    <MenuItem name="2-1">Option 5</MenuItem>
                                    <MenuItem name="2-2">Option 6</MenuItem>
                                    <Submenu name="3">
                                        <template slot="title">Submenu</template>
                                        <MenuItem name="3-1">Option 7</MenuItem>
                                        <MenuItem name="3-2">Option 8</MenuItem>
                                    </Submenu>
                                </Submenu>
                                <Submenu name="4">
                                    <template slot="title">
                                        <Icon type="ios-cog" />
                                        用户管理
                                    </template>
                                    <MenuItem name="4-1">Option 9</MenuItem>
                                    <MenuItem name="4-2">Option 10</MenuItem>
                                    <MenuItem name="4-3">Option 11</MenuItem>
                                    <MenuItem name="4-4">Option 12</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content style="background-color: #fff;">
                          <div style="height:1000px;">
                            <router-view/>
                          </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
        <!-- 退出登录模态框 -->
        <Modal
            v-model="modal1"
            title="退出登录"
            @on-ok="ok"
            >
            <p>确定要退出登录吗？</p>
        </Modal>
    </div>
</template>
<script>
export default {
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('退出成功')
      this.$router.push('/Login')
    }
  }
}
</script>
