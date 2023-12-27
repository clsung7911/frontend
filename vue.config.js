const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",  // ���� Ÿ�� ���丮
  devServer: {
    proxy: {
      '/api': {
        // '/api' �� ������ ��Ʈ 9090(������ ����)�� ������
        target: 'http://localhost:9090',
        changeOrigin: true // cross origin ���
      }
    }
  }
})
