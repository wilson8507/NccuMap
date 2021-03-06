// Generated by LiveScript 1.2.0
L.NLSC = {};
L.NLSC.WMS = L.TileLayer.WMS.extend({
  _url: 'http://maps.nlsc.gov.tw/S_Maps/wms?',
  defaultWmsParams: {
    service: 'WMS',
    request: 'GetMap',
    version: '1.1.1',
    layers: '',
    styles: '',
    format: 'image/png',
    transparent: true
  },
  options: {
    uppercase: true,
    crs: null,
    attribution: '© <a target="_target" href="http://maps.nlsc.gov.tw/">國土測繪圖資網路地圖服務</a>'
  },
  initialize: function(options){
    var wmsParams, i;
    this.defaultWmsParams['layers'] = this.layerid;
    wmsParams = L.extend({}, this.defaultWmsParams);
    for (i in options) {
      if (this.options[i] == null && i !== 'crs') {
        wmsParams[i] = options[i];
      }
    }
    options = L.setOptions(this, options);
    wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && L.Browser.retina ? 2 : 1);
    return this.wmsParams = wmsParams;
  }
});
L.NLSC.B5000 = L.NLSC.WMS.extend({
  name: '1/5000基本地形圖',
  layerid: 'B5000'
});
L.NLSC.MB5000 = L.NLSC.WMS.extend({
  name: '1/5000圖幅框',
  layerid: 'MB5000'
});
L.NLSC.EMAP0 = L.NLSC.WMS.extend({
  name: '通用版電子地圖(無門牌)',
  layerid: 'EMAP0'
});
L.NLSC.EMAP1 = L.NLSC.WMS.extend({
  name: '通用版電子地圖透明(含建物)',
  layerid: 'EMAP1'
});
L.NLSC.EMAP2 = L.NLSC.WMS.extend({
  name: '通用版電子地圖透明',
  layerid: 'EMAP2'
});
L.NLSC.EMAP5OPENDATA = L.NLSC.WMS.extend({
  name: '通用電子地圖(不含等高線)',
  layerid: 'EMAP5_OPENDATA'
});
L.NLSC.EMAP6OPENDATA = L.NLSC.WMS.extend({
  name: '通用電子地圖(套疊等高線)',
  layerid: 'EMAP6_OPENDATA'
});
L.NLSC.EMAP5 = L.NLSC.WMS.extend({
  name: '通用電子地圖(不含等高線)',
  layerid: 'EMAP5'
});
L.NLSC.EMAP6 = L.NLSC.WMS.extend({
  name: '通用電子地圖(套疊等高線)',
  layerid: 'EMAP6'
});
L.NLSC.EMAP7 = L.NLSC.WMS.extend({
  name: '通用電子地圖英語透明',
  layerid: 'EMAP7'
});
L.NLSC.EMAP8 = L.NLSC.WMS.extend({
  name: '通用電子地圖英語',
  layerid: 'EMAP8'
});
L.NLSC.EMAP = L.NLSC.WMS.extend({
  name: '通用版電子地圖',
  layerid: 'EMAP'
});
L.NLSC.LANDSECT = L.NLSC.WMS.extend({
  name: '段籍圖',
  layerid: 'LANDSECT'
});
L.NLSC.LUIMAP = L.NLSC.WMS.extend({
  name: '國土利用調查成果圖',
  layerid: 'LUIMAP'
});
L.NLSC.PHOTO2 = L.NLSC.WMS.extend({
  name: '正射影像圖(通用版)',
  layerid: 'PHOTO2'
});
L.NLSC.Village = L.NLSC.WMS.extend({
  name: '村里界',
  layerid: 'Village'
});