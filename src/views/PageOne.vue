<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="id"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="120">
            </el-table-column>

            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="size"
                :total="total"
                @current-change="page"
        >
        </el-pagination>
    </div>

</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                this.$router.push({path:'/PageThree',query:{id:row.id,name:row.name,password:row.password}});

            },
            deleteClick(row) {
                const _this = this;
                axios.get('http://localhost:8081/user/deleteUser?id='+row.id).then(function (res) {
                    if(res.data==='success'){
                        _this.$alert('删除成功', '消息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                window.location.reload();
                            }
                        });

                    }
                })
            },
            page(page){
                const _this = this;
                axios.get('http://localhost:8081/user/getPage?page='+page).then(function (res) {
                    _this.tableData=res.data.data;
                    _this.total=res.data.total;
                    _this.size=res.data.pageSize;

                })
            }
        },
        created() {
            const _this = this;
            axios.get('http://localhost:8081/user/getPage?page=1').then(function (res) {
                _this.tableData=res.data.data;
                _this.total=res.data.total;
                _this.size=res.data.pageSize;

            })
        },

        data() {
            return {
                total:null,
                size:null,
                tableData: null
            }
        }
    }
</script>