var wms_layers = [];


        var lyr_CartoDarkMatter_0 = new ol.layer.Tile({
            'title': 'Carto Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_CartoPositron_1 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_ESRINationalGeographic_2 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_4 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Labels_5 = new ol.layer.Tile({
            'title': 'Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_ProvinsiyangPernahDikunjungi_6 = new ol.format.GeoJSON();
var features_ProvinsiyangPernahDikunjungi_6 = format_ProvinsiyangPernahDikunjungi_6.readFeatures(json_ProvinsiyangPernahDikunjungi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinsiyangPernahDikunjungi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinsiyangPernahDikunjungi_6.addFeatures(features_ProvinsiyangPernahDikunjungi_6);
var lyr_ProvinsiyangPernahDikunjungi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinsiyangPernahDikunjungi_6, 
                style: style_ProvinsiyangPernahDikunjungi_6,
                popuplayertitle: 'Provinsi yang Pernah Dikunjungi',
                interactive: false,
                title: '<img src="styles/legend/ProvinsiyangPernahDikunjungi_6.png" /> Provinsi yang Pernah Dikunjungi'
            });
var format_DirektoratPembinaankemampuan_7 = new ol.format.GeoJSON();
var features_DirektoratPembinaankemampuan_7 = format_DirektoratPembinaankemampuan_7.readFeatures(json_DirektoratPembinaankemampuan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirektoratPembinaankemampuan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirektoratPembinaankemampuan_7.addFeatures(features_DirektoratPembinaankemampuan_7);
var lyr_DirektoratPembinaankemampuan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DirektoratPembinaankemampuan_7, 
                style: style_DirektoratPembinaankemampuan_7,
                popuplayertitle: 'Direktorat Pembinaan kemampuan',
                interactive: true,
    title: 'Direktorat Pembinaan kemampuan<br />\
    <img src="styles/legend/DirektoratPembinaankemampuan_7_0.png" /> Pengembangan Sistem Operasi<br />\
    <img src="styles/legend/DirektoratPembinaankemampuan_7_1.png" /> Subdirektorat Pelatihan<br />\
    <img src="styles/legend/DirektoratPembinaankemampuan_7_2.png" /> Subdirektorat Penggunaan Kekuatan<br />' });
var format_Overview_8 = new ol.format.GeoJSON();
var features_Overview_8 = format_Overview_8.readFeatures(json_Overview_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Overview_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Overview_8.addFeatures(features_Overview_8);
cluster_Overview_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Overview_8
});
var lyr_Overview_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Overview_8, 
                style: style_Overview_8,
                popuplayertitle: 'Overview',
                interactive: false,
                title: '<img src="styles/legend/Overview_8.png" /> Overview'
            });

lyr_CartoDarkMatter_0.setVisible(true);lyr_CartoPositron_1.setVisible(true);lyr_ESRINationalGeographic_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_ESRISatellite_4.setVisible(true);lyr_Labels_5.setVisible(true);lyr_ProvinsiyangPernahDikunjungi_6.setVisible(true);lyr_DirektoratPembinaankemampuan_7.setVisible(true);lyr_Overview_8.setVisible(true);
var layersList = [lyr_CartoDarkMatter_0,lyr_CartoPositron_1,lyr_ESRINationalGeographic_2,lyr_GoogleSatellite_3,lyr_ESRISatellite_4,lyr_Labels_5,lyr_ProvinsiyangPernahDikunjungi_6,lyr_DirektoratPembinaankemampuan_7,lyr_Overview_8];
lyr_ProvinsiyangPernahDikunjungi_6.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_DirektoratPembinaankemampuan_7.set('fieldAliases', {'id': 'id', 'lat': 'lat', 'lng': 'lng', 'foto': 'foto', 'Kegiatan': 'Kegiatan', 'Unit': 'Unit', 'Waktu': 'Waktu', 'Tahun': 'Tahun', 'Lokasi': 'Lokasi', 'Provinsi': 'Provinsi', 'peserta/pi': 'Peserta/Pihak Terlibat', 'jumlah_pes': 'Jumlah Peserta/Responden Valid', 'ringkasan_': 'Ringkasan Kegiatan', 'IKAP': 'IKAP', 'field_15': 'field_15', });
lyr_Overview_8.set('fieldAliases', {'id': 'id', 'lat': 'lat', 'lng': 'lng', 'foto': 'foto', 'Kegiatan': 'Kegiatan', 'Unit': 'Unit', 'Waktu': 'Waktu', 'Tahun': 'Tahun', 'Lokasi': 'Lokasi', 'Provinsi': 'Provinsi', 'peserta/pi': 'peserta/pi', 'jumlah_pes': 'jumlah_pes', 'ringkasan_': 'ringkasan_', 'IKAP': 'IKAP', 'field_15': 'field_15', });
lyr_ProvinsiyangPernahDikunjungi_6.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_DirektoratPembinaankemampuan_7.set('fieldImages', {'id': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'foto': 'TextEdit', 'Kegiatan': 'TextEdit', 'Unit': 'TextEdit', 'Waktu': 'TextEdit', 'Tahun': 'TextEdit', 'Lokasi': 'TextEdit', 'Provinsi': 'TextEdit', 'peserta/pi': 'TextEdit', 'jumlah_pes': 'TextEdit', 'ringkasan_': 'TextEdit', 'IKAP': 'TextEdit', 'field_15': 'TextEdit', });
lyr_Overview_8.set('fieldImages', {'id': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'foto': 'TextEdit', 'Kegiatan': 'TextEdit', 'Unit': 'TextEdit', 'Waktu': 'TextEdit', 'Tahun': 'TextEdit', 'Lokasi': 'TextEdit', 'Provinsi': 'TextEdit', 'peserta/pi': 'TextEdit', 'jumlah_pes': 'TextEdit', 'ringkasan_': 'TextEdit', 'IKAP': 'TextEdit', 'field_15': 'TextEdit', });
lyr_ProvinsiyangPernahDikunjungi_6.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_DirektoratPembinaankemampuan_7.set('fieldLabels', {'id': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'foto': 'no label', 'Kegiatan': 'header label - visible with data', 'Unit': 'header label - visible with data', 'Waktu': 'header label - visible with data', 'Tahun': 'hidden field', 'Lokasi': 'header label - visible with data', 'Provinsi': 'hidden field', 'peserta/pi': 'header label - visible with data', 'jumlah_pes': 'header label - visible with data', 'ringkasan_': 'header label - visible with data', 'IKAP': 'header label - visible with data', 'field_15': 'hidden field', });
lyr_Overview_8.set('fieldLabels', {'id': 'no label', 'lat': 'no label', 'lng': 'no label', 'foto': 'no label', 'Kegiatan': 'no label', 'Unit': 'no label', 'Waktu': 'no label', 'Tahun': 'no label', 'Lokasi': 'no label', 'Provinsi': 'no label', 'peserta/pi': 'no label', 'jumlah_pes': 'no label', 'ringkasan_': 'no label', 'IKAP': 'no label', 'field_15': 'no label', });
lyr_Overview_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});