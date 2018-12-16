<template>
  <div id="List">
    <Table border :columns="columns1" :data="data1">
    </Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name',
          align:'center'
        },
        {
          title: '职位',
          key: 'role',
          align:'center'
        },
        {
          title: '权限',
          key: 'limit',
          align:'center',
            render: (h, params) => {
                return h('div', [
                    h('Select', {
                      props: {
                        value:this.data1[1].limit,
                        multiple:true
                      },
                      on: {
                          click: () => {
                              this.show(params.index)
                          }
                      }
                    },
                      [h('Option',{props:{value:this.data1[1].limit}},this.data1[1].limit)]
                    )
                ]);
            }
        }
      ],
      data1: [
        {
          name: 'John Brown',
          role: '前端开发',
          limit: ['哈哈','嘿嘿']
        },
        {
          name: 'Jim Green',
          role: '后端开发',
          limit: "什么鬼"
        },
        {
          name: 'Joe Black',
          role: '产品经理',
          limit: '哈哈'
        },
        {
          name: 'Jon Snow',
          role: '测试',
          limit: '嘿嘿'
        },
        {
          name: 'John Brown',
          role: '打酱油',
          limit: '嗯嗯'
        }
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
