<template>
    <div class="search-container">
        <search
                @result-click="resultClick"
                @on-change="getResult"
                :results="results"
                v-model="value"
                position="absolute"
                auto-scroll-to-top
                top="0"
                @on-focus="onFocus"
                @on-cancel="onCancel"
                @on-submit="onSubmit"
                ref="search"></search>
    </div>
</template>

<script>
    import { Search, Group, Cell, XButton } from 'vux'

    export default {
        components: {
            Search,
            Group,
            Cell,
            XButton
        },
        methods: {
            setFocus () {
                this.$refs.search.setFocus()
            },
            resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult (val) {
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            onSubmit () {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },
            onFocus () {
                console.log('on focus')
            },
            onCancel () {
                console.log('on cancel')
            }
        },
        data () {
            return {
                results: [],
                value: '搜索课程或导师'
            }
        }
    }

    function getResult (val) {
        let rs = []
        for (let i = 0; i < 20; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }
</script>

<style scoped lang="less">
    .search-container{
        width: 100%;
        background: #ccc;
        color: #ccc;
    }
</style>