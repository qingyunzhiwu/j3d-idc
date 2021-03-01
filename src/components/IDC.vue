<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main><div id="dashboard"></div></el-main>
  </el-container>
</template>

<script>
import J3D from "j3d";

export default {
  name: "IDC",
  data() {
    return {
      j3d: J3D.script,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let THREE3D_DIV_ID = "three3DDiv"; // 显示3d的div编号
      let IDC_TEMPLATE = {
        head: {},
        body: {
          dashboard: {
            children: {},
          },
        },
      };
      IDC_TEMPLATE.body.dashboard.children[THREE3D_DIV_ID] = {
        type: "Three3DRenderer",
        style: {
          top: "0px",
          right: "0px",
        },
        width:500,
        height:500,
        children: {
          test: {
            id: "scene_room_jf_xl_1f",
            type: "Three3DScene",
            events: {},
            plugins: [
              {
                type: "DefaultCameraPostionPlugin",
              },
              {
                type: "DefaultLightPlugin",
                intensity: 2.5,
              },
            ],
            children: {
              room_jf_xl_1f: {
                id: "room_jf_xl_1f",
                type: "GLTFModel",
                url: "/static/model/scene/room_jf_xl_1f.glb",
                title: "一层机房",
                isHasFouce: false,
                scale: 1,
                receiveShadow: true,
                castShadow: false,
                plugins: [
                  {
                    type: "GlassPlugin",
                    renderName: "qiang_bo",
                  },
                ],
              },
            },
          },
        },
        plugins: [
          {
            type: "Show3DModelByMousePositionPlugin",
          },
        ],
      };
      // 加载脚本
      this.j3d.loadScript(IDC_TEMPLATE);
      // 执行脚本，显示可视化数据
      this.j3d.runScript();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dashboard {
  width: 100%;
  height: 100%;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
