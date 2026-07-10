(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ClientEdi-clientedi-module"],{

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l="function"==typeof require&&require,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/ClientEdi/client-edi-design.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/ClientEdi/client-edi-design.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-2\">\r\n\r\n  <!-- Single Controls Row -->\r\n  <div class=\"controls-row mb-2\">\r\n    <div class=\"d-flex align-items-center\">\r\n      \r\n      <!-- Title -->\r\n      <h2 class=\"mb-0 fw-semibold me-3 title-text\">\r\n        <i class=\"fa fa-file-text me-1 text-primary\"></i>\r\n        Bajaj EDI Pending Billing List\r\n      </h2>\r\n      \r\n      <!-- Search Box -->\r\n      <div class=\"search-box me-2\">\r\n        <i class=\"fa fa-search search-icon\"></i>\r\n        <input \r\n          class=\"form-control form-control-sm\" \r\n          type=\"search\" \r\n          [(ngModel)]=\"searchString\" \r\n          autocomplete=\"off\"\r\n          placeholder=\"Search...\">\r\n      </div>\r\n      \r\n      <!-- Action Buttons -->\r\n      <button \r\n        class=\"btn btn-sm btn-success me-1\" \r\n        (click)=\"GenerateEdiInvoice()\"\r\n        [disabled]=\"!hasSelectedItems()\">\r\n        <i class=\"fa fa-file-excel-o me-1\"></i>Generate Excel\r\n      </button>\r\n      <button \r\n        class=\"btn btn-sm btn-primary\" \r\n        (click)=\"GenerateEditxtInvoice()\"\r\n        [disabled]=\"!hasSelectedItems()\">\r\n        <i class=\"fa fa-file-text-o me-1\"></i>Generate Text\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Data Table -->\r\n  <div *ngIf=\"displayType=='LIST'\">\r\n    <div class=\"card shadow-sm border-0\">\r\n      <div class=\"card-body p-0\">\r\n        \r\n        <!-- Loading State -->\r\n        <!-- <div *ngIf=\"isLoading\" class=\"text-center p-4\">\r\n          <div class=\"spinner-border text-primary\" role=\"status\"></div>\r\n          <p class=\"mt-2 text-muted small\">Loading...</p>\r\n        </div> -->\r\n\r\n        <!-- Data Table -->\r\n        <div *ngIf=\"workOrders.length > 0\" \r\n             class=\"table-scroll-container\">\r\n          <table class=\"table mb-0 modern-data-table\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"sticky-check-col text-center\">\r\n                  <input \r\n                    type=\"checkbox\" \r\n                    class=\"form-check-input\"\r\n                    [(ngModel)]=\"selectAll\"\r\n                    (change)=\"onSelectAllChange()\">\r\n                </th>\r\n                <th>Work Order No</th>\r\n                <th>WO Date</th>\r\n                <th>Client</th>\r\n                <th>Ship Bill No</th>\r\n                <th>Ship Bill Date</th>\r\n                <th>Sailing Date</th>\r\n                <th>Invoice No</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let order of workOrders | clientedifilterpipe: searchString\"\r\n                  [class.row-disabled]=\"!(order.ISIRNDONE == 1 \r\n                  && order.ISBOL_SENT == 1 \r\n                  && order.ISAUTHODONE == 0) && order.BILLTYPEFLAG == 1\">\r\n                \r\n                <td class=\"sticky-check-col text-center\">\r\n                  <input \r\n                    type=\"checkbox\"\r\n                    class=\"form-check-input\"\r\n                    [(ngModel)]=\"order.checked\"\r\n                    (change)=\"onWOSelectChange()\"\r\n                    [disabled]=\"!(order.ISIRNDONE == 1 \r\n                    && order.ISBOL_SENT == 1 \r\n                    && order.ISAUTHODONE !== 0 && order.BILLTYPEFLAG == 1)\">\r\n                </td>\r\n                \r\n                <td [title]=\"order.WORKORDERNO\">\r\n                  <span class=\"text-primary fw-semibold\"><b>{{ order.WORKORDERNO }}</b></span>\r\n                </td>\r\n                <td [title]=\"order.WORKORDERDT\">{{ order.WORKORDERDT }}</td>\r\n                <td [title]=\"order.CLIENT\">{{ order.CLIENT }}</td>\r\n                <td [title]=\"order.SHIPBILLNO\">{{ order.SHIPBILLNO }}</td>\r\n                <td [title]=\"order.SHIPBILLDT\">{{ order.SHIPBILLDT }}</td>\r\n                <td [title]=\"order.SAILING\">{{ order.SAILING }}</td>\r\n                <td class=\"invoice-cell\">\r\n                  <div class=\"invoice-list\">\r\n                    <ng-container *ngFor=\"let inv of order.INVOICENO?.split('<br>')\">\r\n                      <span class=\"invoice-link\" (click)=\"viewinvoice(inv)\" [title]=\"inv\">\r\n                        {{ inv }}\r\n                      </span>\r\n                    </ng-container>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- No Data State -->\r\n        <div *ngIf=\"!isLoading && (!workOrders || workOrders.length === 0)\" \r\n             class=\"text-center p-4\">\r\n          <i class=\"fa fa-inbox fa-2x text-muted mb-2\"></i>\r\n          <p class=\"text-muted mb-0 small\">No work orders found.</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accounts/ClientEdi/client-fileupload.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accounts/ClientEdi/client-fileupload.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\r\n  \r\n  <!-- Controls Row -->\r\n  <!-- <div class=\"controls-row mb-3\">\r\n    <div class=\"d-flex align-items-center\">\r\n      <i class=\"fa fa-upload me-2 text-primary\"></i>\r\n      <h6 class=\"mb-0 fw-semibold title-text\">File Upload</h6>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- Upload Card -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-8 col-lg-6\">\r\n      <div class=\"card shadow-sm border-0\">\r\n        \r\n        <div class=\"card-header\">\r\n          <div class=\"d-flex align-items-center\">\r\n            <i class=\"fa fa-cloud-upload me-2 text-primary\"></i>\r\n            <h6 class=\"mb-0 fw-semibold\">Upload File</h6>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-body p-4\">\r\n          \r\n          <!-- Drop Zone -->\r\n          <div \r\n            class=\"drop-zone\"\r\n            [class.drag-over]=\"isDragOver\"\r\n            [class.has-file]=\"selectedFile\"\r\n            (dragover)=\"onDragOver($event)\"\r\n            (dragleave)=\"onDragLeave($event)\"\r\n            (drop)=\"onDrop($event)\"\r\n            (click)=\"fileInput.click()\">\r\n            \r\n            <div *ngIf=\"!selectedFile\" class=\"drop-zone-content\">\r\n              <i class=\"fa fa-cloud-upload drop-icon\"></i>\r\n              <p class=\"drop-text\">Drag & Drop file here</p>\r\n              <p class=\"drop-subtext\">or <span class=\"browse-link\">browse</span> to choose file</p>\r\n              <p class=\"allowed-types\">Allowed: XLS, XLSX, CSV, PDF, DOC, DOCX</p>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedFile\" class=\"file-preview\">\r\n              <i class=\"fa file-type-icon\" [ngClass]=\"getFileIcon()\"></i>\r\n              <div class=\"file-info\">\r\n                <p class=\"file-name\">{{ selectedFile.name }}</p>\r\n                <p class=\"file-size\">{{ getFileSize() }}</p>\r\n              </div>\r\n              <button \r\n                class=\"btn-remove\" \r\n                (click)=\"removeFile($event)\"\r\n                title=\"Remove file\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!-- Hidden File Input -->\r\n          <input \r\n            #fileInput\r\n            type=\"file\" \r\n            class=\"d-none\"\r\n            (change)=\"onFileSelected($event)\"\r\n            accept=\".xls,.xlsx,.csv,.pdf,.doc,.docx\">\r\n\r\n          <!-- Form Fields -->\r\n          <div class=\"row g-3 mt-2\">\r\n            <!-- <div class=\"col-md-6\">\r\n              <label class=\"form-label\">Document Type <span class=\"text-danger\">*</span></label>\r\n              <ng-select\r\n                [items]=\"documentTypes\"\r\n                bindLabel=\"label\"\r\n                bindValue=\"value\"\r\n                [(ngModel)]=\"selectedDocType\"\r\n                placeholder=\"-- Select Type --\"\r\n                class=\"custom-ng-select\">\r\n              </ng-select>\r\n            </div> -->\r\n<!-- \r\n            <div class=\"col-md-6\">\r\n              <label class=\"form-label\">Reference No</label>\r\n              <input \r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                [(ngModel)]=\"referenceNo\"\r\n                placeholder=\"Enter reference no\">\r\n            </div>\r\n\r\n            <div class=\"col-12\">\r\n              <label class=\"form-label\">Remarks</label>\r\n              <textarea \r\n                class=\"form-control form-control-sm\"\r\n                [(ngModel)]=\"remarks\"\r\n                rows=\"2\"\r\n                placeholder=\"Enter remarks (optional)\">\r\n              </textarea>\r\n            </div> -->\r\n          </div>\r\n\r\n          <!-- Progress Bar -->\r\n          <div *ngIf=\"isUploading\" class=\"mt-3\">\r\n            <div class=\"d-flex justify-content-between mb-1\">\r\n              <small class=\"text-muted\">Uploading...</small>\r\n              <small class=\"text-muted\">{{ uploadProgress }}%</small>\r\n            </div>\r\n            <div class=\"progress\" style=\"height: 6px;\">\r\n              <div \r\n                class=\"progress-bar progress-bar-striped progress-bar-animated\"\r\n                [style.width.%]=\"uploadProgress\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Success Message -->\r\n          <div *ngIf=\"uploadSuccess\" class=\"alert alert-success mt-3 py-2\">\r\n            <i class=\"fa fa-check-circle me-2\"></i>\r\n            File uploaded successfully!\r\n          </div>\r\n\r\n          <!-- Error Message -->\r\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger mt-3 py-2\">\r\n            <i class=\"fa fa-exclamation-circle me-2\"></i>\r\n            {{ errorMessage }}\r\n          </div>\r\n\r\n          <!-- Action Buttons -->\r\n          <div class=\"d-flex justify-content-center gap-2 mt-4\">\r\n             <button \r\n              class=\"btn btn-primary btn-sm px-4\"\r\n              (click)=\"uploadFile()\"\r\n              [disabled]=\"!selectedFile || isUploading \">\r\n              <i class=\"fa fa-upload me-1\"></i>\r\n              {{ isUploading ? 'Uploading...' : 'Upload' }}\r\n            </button>&nbsp;&nbsp;\r\n            <button \r\n              class=\"btn btn-outline-secondary btn-sm px-4\"\r\n              (click)=\"reset()\"\r\n              [disabled]=\"isUploading\">\r\n              <i class=\"fa fa-refresh me-1\"></i>Reset\r\n            </button>\r\n           \r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Uploaded Files List -->\r\n    <!-- <div class=\"col-md-8 col-lg-6 mt-3\" *ngIf=\"uploadedFiles && uploadedFiles.length > 0\">\r\n      <div class=\"card shadow-sm border-0\">\r\n        \r\n        <div class=\"card-header\">\r\n          <div class=\"d-flex align-items-center justify-content-between\">\r\n            <div class=\"d-flex align-items-center\">\r\n              <i class=\"fa fa-files-o me-2 text-primary\"></i>\r\n              <h6 class=\"mb-0 fw-semibold\">Uploaded Files</h6>\r\n            </div>\r\n            <span class=\"badge bg-primary\">{{ uploadedFiles.length }}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-body p-0\">\r\n          <div class=\"uploaded-files-list\">\r\n            <div \r\n              class=\"uploaded-file-item\" \r\n              *ngFor=\"let file of uploadedFiles; let i = index\">\r\n              \r\n              <div class=\"d-flex align-items-center\">\r\n                <i class=\"fa me-3 file-icon\" [ngClass]=\"getUploadedFileIcon(file.name)\"></i>\r\n                <div class=\"file-details flex-grow-1\">\r\n                  <p class=\"file-name mb-0\">{{ file.name }}</p>\r\n                  <small class=\"text-muted\">{{ file.size }} · {{ file.uploadedOn }}</small>\r\n                </div>\r\n                <div class=\"file-actions\">\r\n                  <button \r\n                    class=\"btn btn-sm btn-outline-primary me-1\"\r\n                    (click)=\"downloadFile(file.name)\"\r\n                    title=\"Download\">\r\n                    <i class=\"fa fa-download\"></i>\r\n                  </button>\r\n                  <button \r\n                    class=\"btn btn-sm btn-outline-danger\"\r\n                    (click)=\"deleteFile(file, i)\"\r\n                    title=\"Delete\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div> -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/ClientEdi/client-edi-design.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/ClientEdi/client-edi-design.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls-row {\n  background: white;\n  padding: 0.5rem 0.5rem;\n  border-radius: 6px;\n  border-bottom: 1px solid #e9ecef; }\n  .controls-row .d-flex {\n    flex-wrap: nowrap;\n    align-items: center;\n    gap: 0.5rem;\n    overflow-x: auto; }\n  @media (max-width: 768px) {\n      .controls-row .d-flex {\n        flex-wrap: wrap; } }\n  .title-text {\n  white-space: nowrap;\n  font-size: 0.9rem;\n  color: #374151; }\n  @media (max-width: 1366px) {\n    .title-text {\n      font-size: 1rem; } }\n  @media (max-width: 1024px) {\n    .title-text {\n      font-size: 0.7rem; } }\n  @media (max-width: 768px) {\n    .title-text {\n      font-size: 0.5rem; } }\n  .search-box {\n  position: relative;\n  width: 200px;\n  flex-shrink: 0; }\n  @media (max-width: 1366px) {\n    .search-box {\n      width: 170px; } }\n  @media (max-width: 1024px) {\n    .search-box {\n      width: 150px; } }\n  .search-box .search-icon {\n    position: absolute;\n    left: 10px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #6c757d;\n    z-index: 1;\n    font-size: 0.75rem; }\n  .search-box .form-control {\n    padding-left: 30px;\n    border-radius: 20px;\n    border: 1px solid #ced4da;\n    height: 28px;\n    font-size: 0.78rem; }\n  .search-box .form-control:focus {\n      border-color: #86b7fe;\n      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.2); }\n  .card {\n  border-radius: 8px;\n  overflow: hidden; }\n  .card-body {\n  padding: 0 !important; }\n  .table-scroll-container {\n  display: block;\n  width: 100%;\n  height: calc(100vh - 160px);\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  -webkit-overflow-scrolling: touch; }\n  @media (max-width: 1366px) {\n    .table-scroll-container {\n      height: calc(100vh - 170px); } }\n  @media (max-width: 1024px) {\n    .table-scroll-container {\n      height: calc(100vh - 180px); } }\n  @media (max-width: 768px) {\n    .table-scroll-container {\n      height: calc(100vh - 200px); } }\n  .table-scroll-container::-webkit-scrollbar {\n    width: 8px;\n    height: 8px; }\n  .table-scroll-container::-webkit-scrollbar-track {\n    background: #f1f1f1; }\n  .table-scroll-container::-webkit-scrollbar-thumb {\n    background: #aaa;\n    border-radius: 4px; }\n  .table-scroll-container::-webkit-scrollbar-thumb:hover {\n      background: #666; }\n  .modern-data-table {\n  margin: 0 !important;\n  min-width: 900px;\n  width: 100%;\n  font-size: 0.82rem;\n  border-collapse: collapse; }\n  @media (max-width: 768px) {\n    .modern-data-table {\n      min-width: 750px !important;\n      /* Force reduction from 900px to 750px for tablet screens */\n      font-size: 0.75rem; } }\n  .modern-data-table thead {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 10; }\n  .modern-data-table thead tr {\n      background: #26a6d4; }\n  .modern-data-table thead th {\n      padding: 8px 10px;\n      font-weight: 600;\n      text-transform: uppercase;\n      font-size: 0.7rem;\n      letter-spacing: 0.3px;\n      border: none;\n      white-space: nowrap !important;\n      color: white;\n      background: #26a6d4; }\n  @media (max-width: 1366px) {\n        .modern-data-table thead th {\n          padding: 6px 8px;\n          font-size: 0.65rem; } }\n  @media (max-width: 768px) {\n        .modern-data-table thead th {\n          padding: 5px 6px;\n          font-size: 0.6rem; } }\n  .modern-data-table .sticky-check-col {\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    left: 0 !important;\n    z-index: 12 !important;\n    width: 45px !important;\n    min-width: 45px !important;\n    max-width: 45px !important;\n    text-align: center;\n    background: #26a6d4;\n    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); }\n  .modern-data-table tbody tr {\n    transition: background 0.15s ease; }\n  .modern-data-table tbody tr:hover:not(.row-disabled) {\n      background: #f0f7ff; }\n  .modern-data-table tbody tr.row-disabled {\n      opacity: 0.7;\n      cursor: not-allowed; }\n  .modern-data-table tbody tr td {\n      padding: 5px 8px;\n      color: #374151;\n      border-bottom: 1px solid #e5e7eb;\n      vertical-align: middle;\n      white-space: nowrap !important;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 180px; }\n  @media (max-width: 1366px) {\n        .modern-data-table tbody tr td {\n          padding: 4px 6px;\n          max-width: 150px;\n          font-size: 0.78rem; } }\n  @media (max-width: 768px) {\n        .modern-data-table tbody tr td {\n          padding: 3px 5px;\n          max-width: 120px;\n          font-size: 0.72rem; } }\n  .modern-data-table tbody tr td.sticky-check-col {\n        background: white !important;\n        z-index: 9 !important;\n        box-shadow: 2px 0 4px rgba(0, 0, 0, 0.08); }\n  .modern-data-table tbody tr:hover:not(.row-disabled) td.sticky-check-col {\n      background: #f0f7ff !important; }\n  .modern-data-table tbody tr.row-disabled td.sticky-check-col {\n      background: #f8f9fa !important; }\n  .modern-data-table tbody tr:last-child td {\n    border-bottom: none; }\n  .invoice-cell {\n  max-width: 350px !important;\n  white-space: normal !important; }\n  @media (max-width: 768px) {\n    .invoice-cell {\n      max-width: 220px !important; }\n      .invoice-cell .invoice-link {\n        font-size: 0.7rem; } }\n  .invoice-cell .invoice-list {\n    display: flex;\n    flex-direction: column;\n    gap: 2px; }\n  .invoice-cell .invoice-link {\n    color: #0d6efd;\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 0.78rem;\n    white-space: nowrap;\n    display: block; }\n  .invoice-cell .invoice-link:hover {\n      text-decoration: underline;\n      color: #0a58ca; }\n  .form-check-input {\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  margin: 0 auto !important;\n  display: block; }\n  .form-check-input:disabled {\n    cursor: not-allowed;\n    opacity: 0.5; }\n  .form-check-input:checked {\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n  .btn {\n  font-weight: 500;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  padding: 0.25rem 0.6rem;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  flex-shrink: 0; }\n  @media (max-width: 1024px) {\n    .btn {\n      font-size: 0.75rem;\n      padding: 0.2rem 0.5rem; } }\n  .btn:hover:not(:disabled) {\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .btn i {\n    font-size: 0.75rem; }\n  .spinner-border {\n  width: 2rem;\n  height: 2rem; }\n  .fa-inbox {\n  opacity: 0.3; }\n  @media (max-width: 1366px) {\n  .container-fluid {\n    padding: 0.5rem !important; } }\n  .container-fluid {\n  overflow: hidden;\n  height: calc(100vh - 150px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQ2xpZW50RWRpL0Q6XFxQcm9qZWN0XFxBcHBsaWNhdGlvblxcTGlua3NfUHJvamVjdHNcXExpbmtzX1Y4TkdfQ2xpbmV0L3NyY1xcYXBwXFxhY2NvdW50c1xcQ2xpZW50RWRpXFxjbGllbnQtZWRpLWRlc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUkE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQTtFQUpsQztJQU9JLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBRWhCO01BWko7UUFhTSxlQUFlLEVBQUEsRUFFbEI7RUFJSDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBO0VBRWQ7SUFMRjtNQU1JLGVBQWUsRUFBQSxFQVdsQjtFQVJDO0lBVEY7TUFXSyxpQkFBaUIsRUFBQSxFQU1yQjtFQUpFO0lBYkg7TUFjSSxpQkFBaUIsRUFBQSxFQUdwQjtFQUdEO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFFZDtJQUxGO01BTUksWUFBWSxFQUFBLEVBNkJmO0VBMUJDO0lBVEY7TUFVSSxZQUFZLEVBQUEsRUF5QmY7RUFuQ0Q7SUFjSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFwQnRCO0lBd0JJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQTVCdEI7TUErQk0scUJBQXFCO01BQ3JCLGdEQUFnRCxFQUFBO0VBTXREO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0UscUJBQXFCLEVBQUE7RUFJdkI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLGlDQUFpQyxFQUFBO0VBRWpDO0lBUkY7TUFTSSwyQkFBMkIsRUFBQSxFQTRCOUI7RUF6QkM7SUFaRjtNQWFJLDJCQUEyQixFQUFBLEVBd0I5QjtFQXJCQztJQWhCRjtNQWlCSSwyQkFBMkIsRUFBQSxFQW9COUI7RUFyQ0Q7SUFxQkksVUFBVTtJQUNWLFdBQVcsRUFBQTtFQXRCZjtJQTBCSSxtQkFBbUIsRUFBQTtFQTFCdkI7SUE4QkksZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBL0J0QjtNQWtDTSxnQkFBZ0IsRUFBQTtFQU10QjtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtFQUV6QjtJQVBGO01BUUksMkJBQTJCO01BQUUsMkRBQUE7TUFDN0Isa0JBQWtCLEVBQUEsRUEwR3JCO0VBbkhEO0lBYUksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sV0FBVyxFQUFBO0VBZmY7TUFrQk0sbUJBQW1CLEVBQUE7RUFsQnpCO01Bc0JNLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixxQkFBcUI7TUFDckIsWUFBWTtNQUNaLDhCQUE4QjtNQUM5QixZQUFZO01BQ1osbUJBQW1CLEVBQUE7RUFFbkI7UUFoQ047VUFpQ1EsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBLEVBT3JCO0VBTEc7UUFwQ1I7VUFxQ1EsZ0JBQWdCO1VBQ2hCLGlCQUFpQixFQUFBLEVBR3BCO0VBekNMO0lBOENJLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdDQUFxQyxFQUFBO0VBdER6QztJQTJETSxpQ0FBaUMsRUFBQTtFQTNEdkM7TUE4RFEsbUJBQW1CLEVBQUE7RUE5RDNCO01BbUVRLFlBQVk7TUFDWixtQkFBbUIsRUFBQTtFQXBFM0I7TUF3RVEsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxnQ0FBZ0M7TUFDaEMsc0JBQXNCO01BQ3RCLDhCQUE4QjtNQUM5QixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGdCQUFnQixFQUFBO0VBRWhCO1FBakZSO1VBa0ZVLGdCQUFnQjtVQUNoQixnQkFBZ0I7VUFDaEIsa0JBQWtCLEVBQUEsRUFlckI7RUFaQztRQXZGUjtVQXdGVSxnQkFBZ0I7VUFDaEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBLEVBU3JCO0VBbkdQO1FBK0ZVLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIseUNBQXNDLEVBQUE7RUFqR2hEO01BdUdRLDhCQUE4QixFQUFBO0VBdkd0QztNQTJHUSw4QkFBOEIsRUFBQTtFQTNHdEM7SUFnSE0sbUJBQW1CLEVBQUE7RUFNekI7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7RUFFNUI7SUFKSjtNQUtJLDJCQUEyQixFQUFBO01BTC9CO1FBUU0saUJBQWlCLEVBQUEsRUFDbEI7RUFUTDtJQWFJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUSxFQUFBO0VBZlo7SUFtQkksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUF4QmxCO01BMkJNLDBCQUEwQjtNQUMxQixjQUFjLEVBQUE7RUFNcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0VBTGhCO0lBUUksbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQVRoQjtJQWFJLHlCQUF5QjtJQUN6QixxQkFBcUIsRUFBQTtFQUt6QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBO0VBRWQ7SUFYRjtNQVlJLGtCQUFrQjtNQUNsQixzQkFBc0IsRUFBQSxFQWdCekI7RUE3QkQ7SUFpQkksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQix5Q0FBeUMsRUFBQTtFQWxCN0M7SUFzQkksWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBdkJ2QjtJQTJCSSxrQkFBa0IsRUFBQTtFQUt0QjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFJZDtFQUNFLFlBQVksRUFBQTtFQUtaO0VBREY7SUFFSSwwQkFBMEIsRUFBQSxFQUU3QjtFQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHMvQ2xpZW50RWRpL2NsaWVudC1lZGktZGVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gUGFnZSBIZWFkZXJcclxuLy8gLnBhZ2UtaGVhZGVyIHtcclxuLy8gLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4vLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB3aGl0ZSAxMDAlKTtcclxuLy8gICBwYWRkaW5nOiAwLjc1cmVtIDAuNzVyZW07XHJcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAvLyAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBkNmVmZDtcclxuLy8gfVxyXG5cclxuLy8gLy8gU2VhcmNoIEJveFxyXG4vLyAuc2VhcmNoLWJveCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHdpZHRoOiAxNzVweDtcclxuICBcclxuLy8gICAuc2VhcmNoLWljb24ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMTJweDtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbi8vICAgICB6LWluZGV4OiAxO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuZm9ybS1jb250cm9sIHtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMzhweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgXHJcbi8vICAgICAmOmZvY3VzIHtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjODZiN2ZlO1xyXG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC8vIENhcmQgU3R5bGluZ1xyXG4vLyAuY2FyZCB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4vLyAgIC5jYXJkLWhlYWRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4vLyAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgIFxyXG4vLyAgICAgaDUge1xyXG4vLyAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuLy8gICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gQmFkZ2VcclxuLy8gLmJhZGdlIHtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gfVxyXG5cclxuLy8gLy8gVGFibGUgQ29udGFpbmVyXHJcbi8vIC50YWJsZS1zY3JvbGwtY29udGFpbmVyIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDMzMHB4O1xyXG4vLyAgIG92ZXJmbG93LXg6IGF1dG87XHJcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcclxuLy8gICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgXHJcbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4vLyAgICAgd2lkdGg6IDEycHg7XHJcbi8vICAgICBoZWlnaHQ6IDEycHg7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBcclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gTW9kZXJuIERhdGEgVGFibGVcclxuLy8gLm1vZGVybi1kYXRhLXRhYmxlIHtcclxuLy8gICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBmb250LXNpemU6IDAuODVyZW07XHJcbi8vICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBcclxuLy8gICB0aGVhZCB7XHJcbi8vICAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0YTkwZTIgMCUsICMzNTdhYmQgMTAwJSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjZhNmQ0IDAlLCAjMjZhNmQ0IDEwMCUpO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlOyBcclxuLy8gICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICB6LWluZGV4OiAxMDtcclxuICAgIFxyXG4vLyAgICAgdGgge1xyXG4vLyAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuLy8gICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4vLyAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIFxyXG4vLyAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4vLyAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRhOTBlMiAwJSwgIzM1N2FiZCAxMDAlKTtcclxuLy8gICAgICAgICB6LWluZGV4OiAxMTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gICB0Ym9keSB7XHJcbi8vICAgICB0ciB7XHJcbi8vICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4vLyAgICAgICAmOmhvdmVyOm5vdCgucm93LWRpc2FibGVkKSB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogI2YwZjdmZjtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbi8vICAgICAgIH1cclxuICAgICAgXHJcbi8vICAgICAgICYucm93LWRpc2FibGVkIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuLy8gICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4vLyAgICAgICB9XHJcbiAgICAgIFxyXG4vLyAgICAgICB0ZCB7XHJcbi8vICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbi8vICAgICAgICAgY29sb3I6ICMzNzQxNTE7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbi8vICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4vLyAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuLy8gICAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuLy8gICAgICAgICAgIHotaW5kZXg6IDk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbiAgICAgIFxyXG4vLyAgICAgICAmOmhvdmVyOm5vdCgucm93LWRpc2FibGVkKSB0ZDpmaXJzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogI2YwZjdmZjtcclxuLy8gICAgICAgfVxyXG4gICAgICBcclxuLy8gICAgICAgJi5yb3ctZGlzYWJsZWQgdGQ6Zmlyc3QtY2hpbGQge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgICAgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBJbnZvaWNlIENlbGwgU3R5bGluZ1xyXG4vLyAuaW52b2ljZS1jZWxsIHtcclxuLy8gICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4vLyAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBcclxuLy8gICAuaW52b2ljZS1saXN0IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgICBnYXA6IDAuNXJlbTtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5pbnZvaWNlLWxpbmsge1xyXG4vLyAgICAgY29sb3I6ICMwZDZlZmQ7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIFxyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4vLyAgICAgICBjb2xvcjogIzBhNThjYTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbiAgXHJcbi8vIC8vICAgLmludm9pY2Utc2VwYXJhdG9yIHtcclxuLy8gLy8gICAgIGNvbG9yOiAjZGVlMmU2O1xyXG4vLyAvLyAgICAgbWFyZ2luOiAwIDAuMjVyZW07XHJcbi8vIC8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBDaGVja2JveCBTdHlsaW5nXHJcbi8vIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuLy8gICB3aWR0aDogMThweDtcclxuLy8gICBoZWlnaHQ6IDE4cHg7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4vLyAgICY6ZGlzYWJsZWQge1xyXG4vLyAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgJjpjaGVja2VkIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBCdXR0b24gU3R5bGluZ1xyXG4vLyAuYnRuIHtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIFxyXG4vLyAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgJjpkaXNhYmxlZCB7XHJcbi8vICAgICBvcGFjaXR5OiAwLjU7XHJcbi8vICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gTG9hZGluZyBTcGlubmVyXHJcbi8vIC5zcGlubmVyLWJvcmRlciB7XHJcbi8vICAgd2lkdGg6IDNyZW07XHJcbi8vICAgaGVpZ2h0OiAzcmVtO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBObyBEYXRhIFN0YXRlXHJcbi8vIC5mYS1pbmJveCwgLmZhLXNlYXJjaCB7XHJcbi8vICAgb3BhY2l0eTogMC4zO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBSZXNwb25zaXZlXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgIC5zZWFyY2gtYm94IHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnBhZ2UtaGVhZGVyIHtcclxuLy8gICAgIC5kLWZsZXgge1xyXG4vLyAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICBnYXA6IDFyZW07XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5jYXJkLWhlYWRlciB7XHJcbi8vICAgICAuZC1mbGV4IHtcclxuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICBcclxuLy8gICAgICAgLmQtZmxleC5nYXAtMiB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgLmJ0biB7XHJcbi8vICAgICAgICAgICBmbGV4OiAxO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gfVxyXG5cclxuLy8gQ29udHJvbHMgUm93IC0gU2luZ2xlIGxpbmVcclxuLmNvbnRyb2xzLXJvdyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcblxyXG4gIC5kLWZsZXgge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7IC8vIEtlZXAgZXZlcnl0aGluZyBpbiBvbmUgcm93XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvOyAvLyBBbGxvdyBob3Jpem9udGFsIHNjcm9sbCBpZiB0b28gc21hbGxcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRpdGxlXHJcbi50aXRsZS10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLy9kaXNwbGF5OiBub25lOyAvLyBIaWRlIHRpdGxlIG9uIHNtYWxsIHNjcmVlbnMgdG8gc2F2ZSBzcGFjZVxyXG4gICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi8vIFNlYXJjaCBCb3hcclxuLnNlYXJjaC1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDAuNzhyZW07XHJcbiAgICBcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICM4NmI3ZmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEzLCAxMTAsIDI1MywgMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENhcmRcclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIFRhYmxlIENvbnRhaW5lclxyXG4udGFibGUtc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpOyAvLyBBZGp1c3RlZCBmb3Igc2luZ2xlIHJvdyBoZWFkZXJcclxuICBvdmVyZmxvdy14OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XHJcbiAgfVxyXG4gIFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gRGF0YSBUYWJsZVxyXG4ubW9kZXJuLWRhdGEtdGFibGUge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogOTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWluLXdpZHRoOiA3NTBweCAhaW1wb3J0YW50OyAvKiBGb3JjZSByZWR1Y3Rpb24gZnJvbSA5MDBweCB0byA3NTBweCBmb3IgdGFibGV0IHNjcmVlbnMgKi9cclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB9XHJcbiAgLy8gKioqIEZJWCAxOiBTdGlja3kgaGVhZGVyIHdpdGggY29ycmVjdCBiYWNrZ3JvdW5kICoqKlxyXG4gIHRoZWFkIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIFxyXG4gICAgdHIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjZhNmQ0OyAvLyBBcHBseSB0byB0ciBub3QgdGhlYWRcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGgge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogIzI2YTZkNDsgLy8gQXBwbHkgdG8gZWFjaCB0aCBpbmRpdmlkdWFsbHlcclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyAqKiogRklYIDI6IFN0aWNreSBjaGVja2JveCBjb2x1bW4gKioqXHJcbiAgLnN0aWNreS1jaGVjay1jb2wge1xyXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTIgIWltcG9ydGFudDsgLy8gSGlnaGVyIHotaW5kZXhcclxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDQ1cHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzI2YTZkNDsgLy8gTWF0Y2ggaGVhZGVyIGJhY2tncm91bmRcclxuICAgIGJveC1zaGFkb3c6IDJweCAwIDRweCByZ2JhKDAsMCwwLDAuMSk7IC8vIFNoYWRvdyB0byBzZXBhcmF0ZSBmcm9tIGNvbnRlbnRcclxuICB9XHJcbiAgXHJcbiAgdGJvZHkge1xyXG4gICAgdHIge1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCgucm93LWRpc2FibGVkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjdmZjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5yb3ctZGlzYWJsZWQge1xyXG4gICAgICAgLy8gYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyAqKiogRklYIDI6IFN0aWNreSBjaGVja2JveCBjb2x1bW4gYm9keSAqKipcclxuICAgICAgICAmLnN0aWNreS1jaGVjay1jb2wge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwIDRweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRml4IGhvdmVyIG9uIHN0aWNreSBjb2x1bW5cclxuICAgICAgJjpob3Zlcjpub3QoLnJvdy1kaXNhYmxlZCkgdGQuc3RpY2t5LWNoZWNrLWNvbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjdmZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnJvdy1kaXNhYmxlZCB0ZC5zdGlja3ktY2hlY2stY29sIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbnZvaWNlIENlbGxcclxuLmludm9pY2UtY2VsbCB7XHJcbiAgbWF4LXdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1heC13aWR0aDogMjIwcHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmludm9pY2UtbGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWxpbmsge1xyXG4gICAgY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGNvbG9yOiAjMGE1OGNhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ2hlY2tib3hcclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIFxyXG4gICY6Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4uYnRuIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNnJlbTtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTcGlubmVyXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4vLyBObyBEYXRhXHJcbi5mYS1pbmJveCB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4vLyBDb250YWluZXJcclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpOyAvLyA2MHB4ID0gbmF2YmFyIGhlaWdodFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/accounts/ClientEdi/client-edi-design.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/accounts/ClientEdi/client-edi-design.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientEdiDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEdiDesignComponent", function() { return ClientEdiDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/toastService */ "./src/app/shared/service/toastService.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/exportexcel.service */ "./src/app/shared/service/exportexcel.service.ts");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ClientEdiDesignComponent = /** @class */ (function () {
    function ClientEdiDesignComponent(_dataService, _toasterService, loaderService, _router, http, _activatedRoute, _loginService, exportser) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this.loaderService = loaderService;
        this._router = _router;
        this.http = http;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this.exportser = exportser;
        this.message = '';
        this.messageType = ''; // 'success', 'error', 'info'
        this.workOrders = [];
        this.displayType = "LIST";
        this.errorMessage = '';
        this.headertxt = "";
        this.isLoading = false;
        this.selectedWONos = '';
        this.freightdata = [];
        this.chadata = [];
        this.logdata = [];
        this.frtfilename = "";
        this.chafilename = "";
        this.rarfilename = "";
        // Adjust this based on your actual filter logic
        this.searchString = '';
        this.selectAll = false;
    }
    ClientEdiDesignComponent.prototype.ngOnInit = function () {
        this.verifyPermission('423', 'Add');
        this.showdata();
    };
    ClientEdiDesignComponent.prototype.verifyPermission = function (formId, userMode) {
        var _this = this;
        this.loaderService.display(true);
        this._loginService.verifyRights(formId, '')
            .subscribe(function (data) {
            _this._loginService.checkVerify(userMode, data);
            _this.loaderService.display(false);
        });
    };
    ClientEdiDesignComponent.prototype.getFilteredCount = function () {
        var _this = this;
        if (!this.workOrders)
            return 0;
        if (!this.searchString)
            return this.workOrders.length;
        // Assuming your pipe filters the data
        // Adjust this based on your actual filter logic
        return this.workOrders.filter(function (order) {
            return Object.values(order).some(function (val) {
                return val.toString().toLowerCase().includes(_this.searchString.toLowerCase());
            });
        }).length;
    };
    ClientEdiDesignComponent.prototype.hasSelectedItems = function () {
        return this.workOrders.some(function (order) { return order.checked; }) || false;
    };
    ClientEdiDesignComponent.prototype.onSelectAllChange = function () {
        var _this = this;
        this.workOrders.forEach(function (order) {
            if (order.ISIRNDONE == 1 && order.ISBOL_SENT == 1 && order.AUTHORISEBY !== 0) {
                order.checked = _this.selectAll;
            }
        });
        this.onWOSelectChange();
    };
    ClientEdiDesignComponent.prototype.showdata = function () {
        // Validate dates
        // if (!this.fromDate || !this.toDate) {
        //   this.showMessage('Please select both from and to dates', 'error');
        //   return;
        // }
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            CLIENTCODE: "",
        };
        this._dataService.getData("Accounts/ACC_CLIENT_EDI_GETINVOICEDATA", jsonmaster)
            .subscribe(function (data) {
            if (data.Table1[0].STATUS == "100") {
                _this.isLoading = true;
                if (data.Table2.length == 0) {
                    _this._toasterService.toast("warning", "Alert", "No record found");
                }
                else if (data.Table2.length >= 1) {
                    _this.workOrders = data.Table2;
                    _this.loaderService.display(false);
                }
            }
        });
    };
    ClientEdiDesignComponent.prototype.showMessage = function (msg, type) {
        var _this = this;
        this.message = msg;
        this.messageType = type;
        // Auto-hide message after 3 seconds
        setTimeout(function () {
            _this.message = '';
            _this.messageType = '';
        }, 3000);
    };
    ClientEdiDesignComponent.prototype.viewinvoice = function (invRow) {
        // invoice number is before first " - "
        var inv = invRow.split(' - ')[0].trim();
        console.log(inv);
        var theTop = (screen.height / 2) - (483 / 2);
        var theLeft = (screen.width / 2) - (780 / 2);
        var toolbar = "resizable=no,scrollbars=no,width=800,height=450,status=no,left=" + theLeft + ",top=" + theTop;
        window.open("./#/popup/Account-Invoice-View/" + inv + "/", "Invoice View", toolbar);
    };
    ClientEdiDesignComponent.prototype.generatelogworkbook = function (data, title) {
        var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_8__["Workbook"]();
        var sheet = workbook.addWorksheet(title);
        sheet.columns = [
            { header: 'WO No', width: 15 },
            { header: 'Port', width: 10 },
            { header: 'Ship Line', width: 15 },
            { header: 'Ser No', width: 15 },
            { header: 'No of Cont', width: 12 },
            { header: 'Rate', width: 12 },
            { header: 'Bill No', width: 20 },
            { header: 'Bill Date', width: 15 },
            { header: 'Bill Type', width: 15 },
            { header: 'Charge Name', width: 50 }
        ];
        var headerRow = sheet.getRow(1);
        sheet.eachRow(function (row, rowNumber) {
            if (rowNumber === 1)
                return;
            row.eachCell(function (cell) {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });
        });
        data.forEach(function (d) {
            sheet.addRow([
                String(d.WO_ORDERNO || ''),
                String(d.EDI_PORT || ''),
                String(d.EDI_SHIPLINE || ''),
                String(d.EDI_CHARGECODE || ''),
                Number(d.INV_QTY || 0),
                Number(d.INV_RATE || 0),
                String(d.INV_NO || ''),
                d.INV_DT || '',
                String(d.STATUS || ''),
                String(d.INV_DESC || '')
            ]);
        });
        sheet.eachRow(function (row) {
            row.eachCell(function (cell) {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });
        });
        sheet.getRow(1).font = { bold: true };
        sheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        return workbook;
    };
    ClientEdiDesignComponent.prototype.generateInvoiceWorkbook = function (data, title) {
        var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_8__["Workbook"]();
        var sheet = workbook.addWorksheet(title);
        // Title row
        //   sheet.mergeCells('A1:H1');
        //   sheet.getCell('A1').value = title;
        //   sheet.getCell('A1').font = { bold: true, size: 14 };
        //   sheet.getCell('A1').alignment = { horizontal: 'center' };
        //   // Move cursor to row 2 before setting columns
        //   sheet.addRow([]);
        //   sheet.columns = [
        //     { header: 'WO No', key: 'WO_ORDERNO', width: 15 },
        //     { header: 'Port', key: 'EDI_PORT', width: 10 },
        //     { header: 'Ship Line', key: 'EDI_SHIPLINE', width: 15 },
        //     { header: 'Ser No', key: 'EDI_CHARGECODE', width: 15 },
        //     { header: 'No of Cont', key: 'INV_QTY', width: 12 },
        //     { header: 'Rate', key: 'INNV_RATE', width: 12 },
        //     { header: 'Cha Bill No', key: 'INV_NO', width: 20 },
        //     { header: 'Bill Date', key: 'INV_DT', width: 15 }
        //   ];
        sheet.columns = [
            { header: 'WO No', width: 15 },
            { header: 'Port', width: 10 },
            { header: 'Ship Line', width: 15 },
            { header: 'Ser No', width: 15 },
            { header: 'No of Cont', width: 12 },
            { header: 'Rate', width: 12 },
            { header: 'Cha Bill No', width: 20 },
            { header: 'Bill Date', width: 15 }
        ];
        // Style header row (row 2)
        var headerRow = sheet.getRow(1);
        //   headerRow.font = { bold: true };
        //   headerRow.eachCell(cell => {
        //     cell.border = {
        //       top: { style: 'thin' },
        //       left: { style: 'thin' },
        //       bottom: { style: 'thin' },
        //       right: { style: 'thin' }
        //     };
        //     cell.alignment = { horizontal: 'center' };
        //   });
        sheet.eachRow(function (row, rowNumber) {
            if (rowNumber === 1)
                return;
            row.eachCell(function (cell) {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });
        });
        // Add data
        //data.forEach(d => sheet.addRow(d));
        data.forEach(function (d) {
            sheet.addRow([
                String(d.WO_ORDERNO || ''),
                String(d.EDI_PORT || ''),
                String(d.EDI_SHIPLINE || ''),
                String(d.EDI_CHARGECODE || ''),
                Number(d.INV_QTY || 0),
                Number(d.INV_RATE || 0),
                String(d.INV_NO || ''),
                d.INV_DT || ''
            ]);
        });
        sheet.eachRow(function (row) {
            row.eachCell(function (cell) {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });
        });
        sheet.getRow(1).font = { bold: true };
        sheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        // data.forEach(d => {
        //   sheet.addRow({
        //     WO_ORDERNO: d.WO_ORDERNO.toString(),
        //     EDI_PORT: d.EDI_PORT.toString(),
        //     EDI_SHIPLINE: d.EDI_SHIPLINE.toString(),
        //     EDI_CHARGECODE: Number(d.EDI_CHARGECODE),
        //     INV_QTY: Number(d.INV_QTY),
        //     INNV_RATE: Number(d.INNV_RATE),
        //     INV_NO: d.INV_NO.toString(),
        //     INV_DT: d.INV_DT
        //   });
        // });
        // sheet.getColumn('WO_ORDERNO').numFmt = '@';
        // sheet.getColumn('EDI_PORT').numFmt = '@';
        // sheet.getColumn('EDI_SHIPLINE').numFmt = '@';
        // sheet.getColumn('EDI_CHARGECODE').numFmt = '@';
        // sheet.getColumn('INV_NO').numFmt = '@';
        //   Rate formatting
        //  sheet.getColumn(6).numFmt = '#,##0.00';
        return workbook;
    };
    ClientEdiDesignComponent.prototype.downloadInvoices = function (freightData, chaData) {
        return __awaiter(this, void 0, void 0, function () {
            var zip, freightWorkbook, chaWorkbook, logWorkbook, freightBuffer, chaBuffer, logBuffer, freightTxt, chaTxt, arr, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        zip = new jszip__WEBPACK_IMPORTED_MODULE_9__();
                        freightWorkbook = this.generateInvoiceWorkbook(freightData, 'Freight Invoice');
                        chaWorkbook = this.generateInvoiceWorkbook(chaData, 'CHA Invoice');
                        logWorkbook = this.generatelogworkbook(this.logdata, 'Log Data');
                        return [4 /*yield*/, freightWorkbook.xlsx.writeBuffer()];
                    case 1:
                        freightBuffer = _a.sent();
                        return [4 /*yield*/, chaWorkbook.xlsx.writeBuffer()];
                    case 2:
                        chaBuffer = _a.sent();
                        return [4 /*yield*/, logWorkbook.xlsx.writeBuffer()];
                    case 3:
                        logBuffer = _a.sent();
                        freightTxt = this.generateTxtContent(freightData);
                        chaTxt = this.generateTxtContent(chaData);
                        arr = new Uint8Array(chaTxt.split('').map(function (c) {
                            return c.charCodeAt(0);
                        }));
                        zip.file(this.frtfilename + '.xlsx', freightBuffer);
                        zip.file(this.chafilename + '.xlsx', chaBuffer);
                        zip.file(this.chafilename + '_Log.xlsx', logBuffer);
                        zip.file(this.frtfilename + '.txt', freightTxt);
                        zip.file(this.chafilename + '.txt', chaTxt);
                        return [4 /*yield*/, zip.generateAsync({ type: 'blob' })];
                    case 4:
                        content = _a.sent();
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(content, this.rarfilename + '.zip');
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientEdiDesignComponent.prototype.GenerateEdiInvoice = function () {
        var _this = this;
        if (this.selectedWONos == '' || this.selectedWONos == undefined) {
            alert("Please select at least one Work Order No to generate Invoice");
            return false;
        }
        this.loaderService.display(true);
        var jsonmaster = {
            wonostr: this.selectedWONos,
            makerid: this._loginService.getLogin()[0].CMPID,
            makerip: this._loginService.getLogin()[0].MAKERIP
        };
        this._dataService.getData("Accounts/EDI_CLIENT_BAJAJ_INVOICE_GEN_MANUALLY", jsonmaster)
            .subscribe(function (data) {
            //console.log(data);
            _this.isLoading = true;
            _this.frtfilename = data.Table[0].FILENAME1;
            _this.chafilename = data.Table[0].FILENAME;
            _this.rarfilename = data.Table[0].RARFILENAME;
            _this.chadata = data.Table1;
            _this.freightdata = data.Table2;
            _this.logdata = data.Table3;
            console.log(_this.freightdata[0].INV_RATE);
            _this.downloadInvoices(_this.freightdata, _this.chadata);
            // this.downloadInvoiceTxtZip(this.freightdata, this.chadata);
            _this.showdata();
            _this.loaderService.display(false);
        });
    };
    ClientEdiDesignComponent.prototype.generateTxtContent = function (data) {
        var pad = function (val, len) {
            return (val || '').toString().padEnd(len, ' ');
        };
        var lines = [];
        lines.push(pad('WO No', 10) +
            pad('Port', 8) +
            pad('Ship Line', 12) +
            pad('Ser No', 12) +
            pad('No of Cont', 12) +
            pad('Rate', 11) +
            pad('Cha Bill No', 18) +
            pad('Bill Date', 12));
        data.forEach(function (d) {
            lines.push(pad(d.WO_ORDERNO, 10) +
                pad(d.EDI_PORT, 8) +
                pad(d.EDI_SHIPLINE, 12) +
                pad(d.EDI_CHARGECODE, 12) +
                pad(d.INV_QTY, 12) +
                pad(d.INV_RATE, 11) +
                pad(d.INV_NO, 18) +
                pad(d.INV_DT, 12));
        });
        return lines.join('\r\n');
    };
    ClientEdiDesignComponent.prototype.generateTxtContent20260210 = function (data) {
        var lines = [];
        // Header
        lines.push([
            'WO No',
            'Port',
            'Ship Line',
            'Ser No',
            'No of Cont',
            'Rate',
            'Cha Bill No',
            'Bill Date'
        ].join('\t'));
        // Rows
        data.forEach(function (d) {
            lines.push([
                (d.WO_ORDERNO || '').toString().trim(),
                (d.EDI_PORT || '').toString().trim(),
                (d.EDI_SHIPLINE || '').toString().trim(),
                (d.EDI_CHARGECODE || '').toString().trim(),
                (d.INV_QTY || 0),
                (d.INV_RATE || 0),
                (d.INV_NO || '').toString().trim(),
                (d.INV_DT || '').toString().trim()
            ].join('\t'));
        });
        return lines.join('\r\n');
    };
    ClientEdiDesignComponent.prototype.generateTxtContentold = function (data) {
        var headers = [
            'WO No',
            'Port',
            'Ship Line',
            'Ser No',
            'No of Cont',
            'Rate',
            'Cha Bill No',
            'Bill Date'
        ];
        var content = headers.join('\t') + '\n';
        data.forEach(function (row) {
            content += [
                row.WO_ORDERNO,
                row.EDI_PORT,
                row.EDI_SHIPLINE,
                row.EDI_CHARGECODE,
                row.INV_QTY,
                row.INV_RATE,
                row.INV_NO,
                row.INV_DT
            ].join('\t') + '\n';
        });
        return content;
    };
    ClientEdiDesignComponent.prototype.downloadInvoiceTxtZip = function (freightData, chaData) {
        return __awaiter(this, void 0, void 0, function () {
            var zip, freightTxt, chaTxt, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        zip = new jszip__WEBPACK_IMPORTED_MODULE_9__();
                        freightTxt = this.generateTxtContent(freightData);
                        chaTxt = this.generateTxtContent(chaData);
                        zip.file('FreightInvoice.txt', freightTxt);
                        zip.file('CHAInvoice.txt', chaTxt);
                        return [4 /*yield*/, zip.generateAsync({ type: 'blob' })];
                    case 1:
                        content = _a.sent();
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(content, 'InvoiceTextFiles.zip');
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientEdiDesignComponent.prototype.GenerateEditxtInvoice = function () {
        var _this = this;
        this.loaderService.display(true);
        var jsonmaster = {
            wonostr: this.selectedWONos,
        };
        this._dataService
            .getData("Accounts/EDI_CLIENT_BAJAJ_INVOICE_GEN_MANUALLY", jsonmaster)
            .subscribe(function (data) {
            _this.chadata = data.Table1;
            _this.freightdata = data.Table2;
            _this.downloadInvoiceTxtZip(_this.freightdata, _this.chadata);
            _this.loaderService.display(false);
        });
    };
    ClientEdiDesignComponent.prototype.onWOSelectChange = function () {
        var selected = this.workOrders
            .filter(function (o) { return o.checked; })
            .map(function (o) { return o.WORKORDERNO; });
        this.selectedWONos = selected.join(',');
        console.log(this.selectedWONos);
    };
    ClientEdiDesignComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"] }
    ]; };
    ClientEdiDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-edi',
            template: __webpack_require__(/*! raw-loader!./client-edi-design.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/ClientEdi/client-edi-design.component.html"),
            styles: [__webpack_require__(/*! ./client-edi-design.component.scss */ "./src/app/accounts/ClientEdi/client-edi-design.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_service_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _shared_service_toastService__WEBPACK_IMPORTED_MODULE_3__["ToastCommonService"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_shared_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_7__["ExportexcelService"]])
    ], ClientEdiDesignComponent);
    return ClientEdiDesignComponent;
}());



/***/ }),

/***/ "./src/app/accounts/ClientEdi/client-edifilterpipe.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/accounts/ClientEdi/client-edifilterpipe.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ClientedifilterpipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientedifilterpipePipe", function() { return ClientedifilterpipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientedifilterpipePipe = /** @class */ (function () {
    function ClientedifilterpipePipe() {
    }
    ClientedifilterpipePipe.prototype.transform = function (value, searchString) {
        if (!searchString) {
            return value;
        }
        return value.filter(function (it) {
            var WORKORDERNO = it.WORKORDERNO
                .toString()
                .toLowerCase()
                .includes(searchString.toLowerCase()) || false;
            return (WORKORDERNO);
        });
    };
    ClientedifilterpipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'clientedifilterpipe'
        })
    ], ClientedifilterpipePipe);
    return ClientedifilterpipePipe;
}());



/***/ }),

/***/ "./src/app/accounts/ClientEdi/client-fileupload.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/accounts/ClientEdi/client-fileupload.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls-row {\n  padding: 0.5rem 0; }\n  .controls-row .title-text {\n    font-size: 1rem;\n    color: #374151; }\n  .card {\n  border-radius: 10px;\n  overflow: hidden; }\n  .card .card-header {\n    background: #f8f9fa;\n    padding: 0.75rem 1rem;\n    border-bottom: 2px solid #e9ecef; }\n  .card .card-header h6 {\n      color: #495057;\n      font-size: 0.9rem; }\n  .drop-zone {\n  border: 2px dashed #ced4da;\n  border-radius: 10px;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: #f8f9fa;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .drop-zone:hover {\n    border-color: #0d6efd;\n    background: #f0f7ff; }\n  .drop-zone.drag-over {\n    border-color: #0d6efd;\n    background: #e8f0fe;\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 0 15px rgba(13, 110, 253, 0.2); }\n  .drop-zone.has-file {\n    border-color: #28a745;\n    background: #f0fff4;\n    border-style: solid; }\n  .drop-zone-content .drop-icon {\n  font-size: 3rem;\n  color: #adb5bd;\n  display: block;\n  margin-bottom: 0.75rem; }\n  .drop-zone-content .drop-text {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.25rem; }\n  .drop-zone-content .drop-subtext {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem; }\n  .drop-zone-content .drop-subtext .browse-link {\n    color: #0d6efd;\n    font-weight: 600;\n    cursor: pointer; }\n  .drop-zone-content .drop-subtext .browse-link:hover {\n      text-decoration: underline; }\n  .drop-zone-content .allowed-types {\n  font-size: 0.75rem;\n  color: #adb5bd;\n  margin-bottom: 0; }\n  .file-preview {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 0.5rem; }\n  .file-preview .file-type-icon {\n    font-size: 2.5rem; }\n  .file-preview .file-info {\n    flex: 1;\n    text-align: left; }\n  .file-preview .file-info .file-name {\n      font-weight: 600;\n      color: #374151;\n      margin-bottom: 0.25rem;\n      font-size: 0.9rem;\n      word-break: break-all; }\n  .file-preview .file-info .file-size {\n      font-size: 0.8rem;\n      color: #6c757d;\n      margin-bottom: 0; }\n  .file-preview .btn-remove {\n    background: none;\n    border: none;\n    color: #dc3545;\n    cursor: pointer;\n    padding: 0.25rem;\n    border-radius: 50%;\n    width: 28px;\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s ease; }\n  .file-preview .btn-remove:hover {\n      background: #fff0f0; }\n  .progress {\n  border-radius: 10px;\n  background: #e9ecef; }\n  .progress .progress-bar {\n    background: linear-gradient(90deg, #0d6efd, #26a6d4);\n    border-radius: 10px; }\n  .form-label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.3rem; }\n  .form-control {\n  font-size: 0.85rem;\n  border-radius: 6px;\n  border: 1px solid #ced4da; }\n  .form-control:focus {\n    border-color: #86b7fe;\n    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.2); }\n  textarea.form-control {\n  resize: none; }\n  .alert {\n  font-size: 0.85rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center; }\n  .btn {\n  font-size: 0.85rem;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s ease; }\n  .btn:hover:not(:disabled) {\n    -webkit-transform: translateY(-1px);\n            transform: translateY(-1px);\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .uploaded-files-list {\n  max-height: 300px;\n  overflow-y: auto; }\n  .uploaded-files-list::-webkit-scrollbar {\n    width: 6px; }\n  .uploaded-files-list::-webkit-scrollbar-thumb {\n    background: #aaa;\n    border-radius: 3px; }\n  .uploaded-file-item {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  transition: background 0.2s ease; }\n  .uploaded-file-item:last-child {\n    border-bottom: none; }\n  .uploaded-file-item:hover {\n    background: #f8f9fa; }\n  .uploaded-file-item .file-icon {\n    font-size: 1.5rem; }\n  .uploaded-file-item .file-details .file-name {\n    font-size: 0.85rem;\n    font-weight: 500;\n    color: #374151; }\n  .uploaded-file-item .file-details small {\n    font-size: 0.75rem; }\n  .uploaded-file-item .file-actions {\n    display: flex;\n    gap: 0.25rem; }\n  .uploaded-file-item .file-actions .btn {\n      padding: 0.2rem 0.4rem;\n      font-size: 0.75rem; }\n  ::ng-deep .custom-ng-select .ng-select-container {\n  min-height: 32px !important;\n  height: 32px !important;\n  font-size: 0.85rem;\n  border-radius: 6px; }\n  ::ng-deep .custom-ng-select .ng-select-container .ng-value-container {\n    padding: 0 8px; }\n  @media (max-width: 768px) {\n  .drop-zone {\n    padding: 1.5rem;\n    min-height: 120px; }\n  .drop-zone-content .drop-icon {\n    font-size: 2rem; }\n  .drop-zone-content .drop-text {\n    font-size: 0.9rem; } }\n  .badge {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.6rem;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQ2xpZW50RWRpL0Q6XFxQcm9qZWN0XFxBcHBsaWNhdGlvblxcTGlua3NfUHJvamVjdHNcXExpbmtzX1Y4TkdfQ2xpbmV0L3NyY1xcYXBwXFxhY2NvdW50c1xcQ2xpZW50RWRpXFxjbGllbnQtZmlsZXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBO0VBRG5CO0lBSUksZUFBZTtJQUNmLGNBQWMsRUFBQTtFQUtsQjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0NBQWdDLEVBQUE7RUFQcEM7TUFVTSxjQUFjO01BQ2QsaUJBQWlCLEVBQUE7RUFNdkI7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFYekI7SUFjSSxxQkFBcUI7SUFDckIsbUJBQW1CLEVBQUE7RUFmdkI7SUFtQkkscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRDQUE0QyxFQUFBO0VBdEJoRDtJQTBCSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0VBS3ZCO0VBRUksZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7RUFMMUI7RUFTSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0IsRUFBQTtFQVoxQjtFQWdCSSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQixFQUFBO0VBbEJ6QjtJQXFCTSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQXZCckI7TUEwQlEsMEJBQTBCLEVBQUE7RUExQmxDO0VBZ0NJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7RUFLcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZSxFQUFBO0VBTGpCO0lBUUksaUJBQWlCLEVBQUE7RUFSckI7SUFZSSxPQUFPO0lBQ1AsZ0JBQWdCLEVBQUE7RUFicEI7TUFnQk0sZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLHFCQUFxQixFQUFBO0VBcEIzQjtNQXdCTSxpQkFBaUI7TUFDakIsY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBMUJ0QjtJQStCSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QixFQUFBO0VBMUM3QjtNQTZDTSxtQkFBbUIsRUFBQTtFQU16QjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtFQUZyQjtJQUtJLG9EQUFvRDtJQUNwRCxtQkFBbUIsRUFBQTtFQUt2QjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQixFQUFBO0VBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtFQUgzQjtJQU1JLHFCQUFxQjtJQUNyQixnREFBZ0QsRUFBQTtFQUlwRDtFQUNFLFlBQVksRUFBQTtFQUlkO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFJckI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtFQUozQjtJQU9JLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IseUNBQXlDLEVBQUE7RUFSN0M7SUFZSSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFLdkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7RUFGbEI7SUFLSSxVQUFVLEVBQUE7RUFMZDtJQVNJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQUl0QjtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDLEVBQUE7RUFIbEM7SUFNSSxtQkFBbUIsRUFBQTtFQU52QjtJQVVJLG1CQUFtQixFQUFBO0VBVnZCO0lBY0ksaUJBQWlCLEVBQUE7RUFkckI7SUFtQk0sa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUFyQnBCO0lBeUJNLGtCQUFrQixFQUFBO0VBekJ4QjtJQThCSSxhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBL0JoQjtNQWtDTSxzQkFBc0I7TUFDdEIsa0JBQWtCLEVBQUE7RUFNeEI7RUFFSSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQUx0QjtJQVFNLGNBQWMsRUFBQTtFQU1wQjtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR25CO0lBRUksZUFBZSxFQUFBO0VBRm5CO0lBTUksaUJBQWlCLEVBQUEsRUFDbEI7RUFLTDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9DbGllbnRFZGkvY2xpZW50LWZpbGV1cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb250cm9scyBSb3dcclxuLmNvbnRyb2xzLXJvdyB7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgXHJcbiAgLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDYXJkXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U5ZWNlZjtcclxuICAgIFxyXG4gICAgaDYge1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEcm9wIFpvbmVcclxuLmRyb3Atem9uZSB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxuICAgIGJhY2tncm91bmQ6ICNmMGY3ZmY7XHJcbiAgfVxyXG4gIFxyXG4gICYuZHJhZy1vdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGYwZmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxMywgMTEwLCAyNTMsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gICYuaGFzLWZpbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgYmFja2dyb3VuZDogI2YwZmZmNDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEcm9wIFpvbmUgQ29udGVudFxyXG4uZHJvcC16b25lLWNvbnRlbnQge1xyXG4gIC5kcm9wLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Atc3VidGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBcclxuICAgIC5icm93c2UtbGluayB7XHJcbiAgICAgIGNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWxsb3dlZC10eXBlcyB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogI2FkYjViZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaWxlIFByZXZpZXdcclxuLmZpbGUtcHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgXHJcbiAgLmZpbGUtdHlwZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZmlsZS1pbmZvIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbiAgICAuZmlsZS1uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWxlLXNpemUge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcmVtb3ZlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjBmMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFByb2dyZXNzIEJhclxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICBcclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBkNmVmZCwgIzI2YTZkNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRm9ybSBDb250cm9sc1xyXG4uZm9ybS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4NmI3ZmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMywgMTEwLCAyNTMsIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLy8gQWxlcnRcclxuLmFsZXJ0IHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBcclxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBVcGxvYWRlZCBGaWxlcyBMaXN0XHJcbi51cGxvYWRlZC1maWxlcy1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udXBsb2FkZWQtZmlsZS1pdGVtIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbiAgXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGUtZGV0YWlscyB7XHJcbiAgICAuZmlsZS1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogIzM3NDE1MTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG5nLXNlbGVjdFxyXG46Om5nLWRlZXAgLmN1c3RvbS1uZy1zZWxlY3Qge1xyXG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgXHJcbiAgICAubmctdmFsdWUtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5kcm9wLXpvbmUge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wLXpvbmUtY29udGVudCB7XHJcbiAgICAuZHJvcC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZHJvcC10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCYWRnZVxyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/accounts/ClientEdi/client-fileupload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/accounts/ClientEdi/client-fileupload.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientEdiFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEdiFileUploadComponent", function() { return ClientEdiFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/dataService */ "./src/app/shared/service/dataService.ts");
/* harmony import */ var _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/loginService */ "./src/app/shared/service/loginService.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/loader.service */ "./src/app/shared/service/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_file_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/file-download.service */ "./src/app/shared/service/file-download.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientEdiFileUploadComponent = /** @class */ (function () {
    function ClientEdiFileUploadComponent(_dataService, http, _loginService, _config, _loaderService, fileDownloadService) {
        this._dataService = _dataService;
        this.http = http;
        this._loginService = _loginService;
        this._config = _config;
        this._loaderService = _loaderService;
        this.fileDownloadService = fileDownloadService;
        // File Selection
        this.selectedFile = null;
        this.isDragOver = false;
        // Form Fields
        this.selectedDocType = '';
        this.referenceNo = '';
        this.remarks = '';
        // Upload State
        this.isUploading = false;
        this.uploadProgress = 0;
        this.uploadSuccess = false;
        this.errorMessage = '';
        this.uploadurl = "";
        this.url = "";
        this.isDownloading = false;
        // Uploaded Files List
        this.uploadedFiles = [];
        // Document Types
        this.documentTypes = [
            { label: 'Invoice', value: 'INVOICE' },
            { label: 'Packing List', value: 'PACKING_LIST' },
            { label: 'Bill of Lading', value: 'BOL' },
            { label: 'Certificate', value: 'CERTIFICATE' },
            { label: 'Other', value: 'OTHER' }
        ];
        // Allowed file types
        this.allowedTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/csv',
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        this.maxFileSize = 10 * 1024 * 1024; // 10MB
    }
    ClientEdiFileUploadComponent.prototype.ngOnInit = function () {
        this.uploadurl = this._config.ServerWithApiUrl;
        this.url = this.uploadurl + "Accounts/UploadEDIExcelFile";
        //this.loadUploadedFiles();
    };
    // Drag & Drop Events
    ClientEdiFileUploadComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = true;
    };
    ClientEdiFileUploadComponent.prototype.onDragLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
    };
    ClientEdiFileUploadComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
        var files = event.dataTransfer.files;
        if (files && files.length > 0) {
            this.validateAndSetFile(files[0]);
        }
    };
    ClientEdiFileUploadComponent.prototype.onFileSelected = function (event) {
        var file = event.target.files[0];
        if (file) {
            this.validateAndSetFile(file);
        }
    };
    ClientEdiFileUploadComponent.prototype.validateAndSetFile = function (file) {
        this.errorMessage = '';
        // Check file size
        if (file.size > this.maxFileSize) {
            this.errorMessage = 'File size exceeds 10MB limit.';
            return;
        }
        // Check file type
        var extension = file.name.split('.').pop().toLowerCase();
        var allowedExtensions = ['xls', 'xlsx', 'csv', 'pdf', 'doc', 'docx'];
        if (!allowedExtensions.includes(extension || '')) {
            this.errorMessage = 'Invalid file type. Please upload XLS, XLSX, CSV, PDF, DOC or DOCX files.';
            return;
        }
        this.selectedFile = file;
        this.uploadSuccess = false;
    };
    ClientEdiFileUploadComponent.prototype.removeFile = function (event) {
        event.stopPropagation();
        this.selectedFile = null;
        this.uploadSuccess = false;
        this.errorMessage = '';
    };
    ClientEdiFileUploadComponent.prototype.getFileIcon = function () {
        if (!this.selectedFile)
            return 'fa-file';
        var ext = this.selectedFile.name.split('.').pop().toLowerCase();
        return this.getIconByExtension(ext || '');
    };
    ClientEdiFileUploadComponent.prototype.getUploadedFileIcon = function (fileName) {
        var ext = fileName.split('.').pop().toLowerCase();
        return this.getIconByExtension(ext || '');
    };
    ClientEdiFileUploadComponent.prototype.getIconByExtension = function (ext) {
        var icons = {
            'pdf': 'fa-file-pdf-o text-danger',
            'xls': 'fa-file-excel-o text-success',
            'xlsx': 'fa-file-excel-o text-success',
            'csv': 'fa-file-text-o text-info',
            'doc': 'fa-file-word-o text-primary',
            'docx': 'fa-file-word-o text-primary'
        };
        return icons[ext] || 'fa-file-o text-secondary';
    };
    ClientEdiFileUploadComponent.prototype.getFileSize = function () {
        if (!this.selectedFile)
            return '';
        var size = this.selectedFile.size;
        if (size < 1024)
            return size + " B";
        if (size < 1024 * 1024)
            return (size / 1024).toFixed(1) + " KB";
        return (size / (1024 * 1024)).toFixed(1) + " MB";
    };
    ClientEdiFileUploadComponent.prototype.uploadFile = function () {
        var _this = this;
        if (!this.selectedFile)
            return;
        this.isUploading = true;
        this.uploadSuccess = false;
        this.errorMessage = '';
        this.uploadProgress = 0;
        // Simulate upload progress
        var interval = setInterval(function () {
            _this.uploadProgress += 10;
            if (_this.uploadProgress >= 100) {
                clearInterval(interval);
                _this.onUploadComplete();
            }
        }, 200);
        var filedata = new FormData();
        filedata.append("file", this.selectedFile, this.selectedFile.name);
        filedata.append("makerid", this._loginService.getLogin()[0].CMPID);
        filedata.append("vguid", this._loginService.getLogin()[0].GUID);
        filedata.append("makerip", this._loginService.getLogin()[0].MAKERIP);
        this.http.post(this.url, filedata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                alert(data.Table[0].STATUSTXT);
            }
            else {
                alert(data.Table[0].STATUSTXT);
            }
            _this.selectedFile = null;
            _this._loaderService.display(false);
        });
    };
    ClientEdiFileUploadComponent.prototype.onUploadComplete = function () {
        var _this = this;
        this.isUploading = false;
        this.uploadSuccess = true;
        // Add to uploaded files list
        this.uploadedFiles.unshift({
            name: this.selectedFile.name,
            size: this.getFileSize(),
            uploadedOn: new Date().toLocaleDateString('en-IN'),
            type: this.selectedDocType
        });
        // Reset form after 2 seconds
        setTimeout(function () {
            _this.reset();
        }, 2000);
    };
    ClientEdiFileUploadComponent.prototype.reset = function () {
        this.selectedFile = null;
        this.selectedDocType = '';
        this.referenceNo = '';
        this.remarks = '';
        this.isUploading = false;
        this.uploadProgress = 0;
        this.uploadSuccess = false;
        this.errorMessage = '';
    };
    ClientEdiFileUploadComponent.prototype.loadUploadedFiles = function () {
        var _this = this;
        if (this.selectedFile == undefined) {
            alert('Please select file to upload');
            return false;
        }
        this._loaderService.display(true);
        var filedata = new FormData();
        filedata.append("file", this.selectedFile, this.selectedFile.name);
        filedata.append("makerid", this._loginService.getLogin()[0].CMPID);
        filedata.append("vguid", this._loginService.getLogin()[0].GUID);
        filedata.append("makerip", this._loginService.getLogin()[0].MAKERIP);
        this.http.post(this.url, filedata)
            .subscribe(function (data) {
            if (data.Table[0].STATUS == "100") {
                alert(data.Table[0].STATUSTXT);
            }
            else {
                alert(data.Table[0].STATUSTXT);
            }
            _this.selectedFile = null;
            _this._loaderService.display(false);
        });
    };
    ClientEdiFileUploadComponent.prototype.downloadFile = function (fileName) {
        var _this = this;
        this.isDownloading = true;
        this.errorMessage = '';
        this.fileDownloadService.downloadFile(fileName).subscribe(function (response) {
            // Get filename from response headers or use provided name
            var contentDisposition = response.headers.get('Content-Disposition');
            var downloadFileName = _this.getFileName(contentDisposition) || fileName;
            // Create blob and download
            _this.saveFile(response.body, downloadFileName);
            _this.isDownloading = false;
        }, function (error) {
            _this.errorMessage = 'File download failed. Please try again.';
            _this.isDownloading = false;
        });
    };
    // Save file to local machine
    ClientEdiFileUploadComponent.prototype.saveFile = function (blob, fileName) {
        var url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
        link.remove();
    };
    // Get filename from Content-Disposition header
    ClientEdiFileUploadComponent.prototype.getFileName = function (contentDisposition) {
        if (!contentDisposition)
            return '';
        var matches = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        return matches && matches[1] ? matches[1].replace(/['"]/g, '') : '';
    };
    ClientEdiFileUploadComponent.prototype.deleteFile = function (file, index) {
        if (confirm("Delete " + file.name + "?")) {
            this.uploadedFiles.splice(index, 1);
            // Replace with your delete API call
        }
    };
    ClientEdiFileUploadComponent.ctorParameters = function () { return [
        { type: _shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_3__["Configuration"] },
        { type: _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _shared_service_file_download_service__WEBPACK_IMPORTED_MODULE_6__["FileDownloadService"] }
    ]; };
    ClientEdiFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-file-upload',
            template: __webpack_require__(/*! raw-loader!./client-fileupload.component.html */ "./node_modules/raw-loader/index.js!./src/app/accounts/ClientEdi/client-fileupload.component.html"),
            styles: [__webpack_require__(/*! ./client-fileupload.component.scss */ "./src/app/accounts/ClientEdi/client-fileupload.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_service_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _shared_service_loginService__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _app_constants__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
            _shared_service_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _shared_service_file_download_service__WEBPACK_IMPORTED_MODULE_6__["FileDownloadService"]])
    ], ClientEdiFileUploadComponent);
    return ClientEdiFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/accounts/ClientEdi/clientedi.module.ts":
/*!********************************************************!*\
  !*** ./src/app/accounts/ClientEdi/clientedi.module.ts ***!
  \********************************************************/
/*! exports provided: ClientEdiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEdiModule", function() { return ClientEdiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _client_edi_design_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-edi-design.component */ "./src/app/accounts/ClientEdi/client-edi-design.component.ts");
/* harmony import */ var _client_edifilterpipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-edifilterpipe.pipe */ "./src/app/accounts/ClientEdi/client-edifilterpipe.pipe.ts");
/* harmony import */ var _clientedi_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clientedi.routing */ "./src/app/accounts/ClientEdi/clientedi.routing.ts");
/* harmony import */ var _client_fileupload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-fileupload.component */ "./src/app/accounts/ClientEdi/client-fileupload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ClientEdiModule = /** @class */ (function () {
    function ClientEdiModule() {
    }
    ClientEdiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_clientedi_routing__WEBPACK_IMPORTED_MODULE_8__["ClientEdiRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_4__["MyDatePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                //SharedModule
            ],
            declarations: [_client_edi_design_component__WEBPACK_IMPORTED_MODULE_6__["ClientEdiDesignComponent"], _client_edifilterpipe_pipe__WEBPACK_IMPORTED_MODULE_7__["ClientedifilterpipePipe"], _client_fileupload_component__WEBPACK_IMPORTED_MODULE_9__["ClientEdiFileUploadComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ClientEdiModule);
    return ClientEdiModule;
}());



/***/ }),

/***/ "./src/app/accounts/ClientEdi/clientedi.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/accounts/ClientEdi/clientedi.routing.ts ***!
  \*********************************************************/
/*! exports provided: ClientEdiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEdiRoutingModule", function() { return ClientEdiRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_edi_design_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-edi-design.component */ "./src/app/accounts/ClientEdi/client-edi-design.component.ts");
/* harmony import */ var _client_fileupload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-fileupload.component */ "./src/app/accounts/ClientEdi/client-fileupload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        data: {
            title: ''
        },
        children: [
            { path: 'ClientEdidesign', component: _client_edi_design_component__WEBPACK_IMPORTED_MODULE_2__["ClientEdiDesignComponent"], data: { title: 'Client EDI' } },
            { path: 'ClientFileUpload', component: _client_fileupload_component__WEBPACK_IMPORTED_MODULE_3__["ClientEdiFileUploadComponent"], data: { title: 'Client File Upload' } }
        ]
    }
];
var ClientEdiRoutingModule = /** @class */ (function () {
    function ClientEdiRoutingModule() {
    }
    ClientEdiRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientEdiRoutingModule);
    return ClientEdiRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/service/file-download.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/file-download.service.ts ***!
  \*********************************************************/
/*! exports provided: FileDownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDownloadService", function() { return FileDownloadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileDownloadService = /** @class */ (function () {
    function FileDownloadService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.apiUrl = _configuration.ServerWithApiUrl;
    }
    // Download file by filename
    FileDownloadService.prototype.downloadFile = function (fileName) {
        return this.http.get(this.apiUrl + "/download/" + fileName, {
            responseType: 'blob',
            observe: 'response'
        });
    };
    // Download file by full path
    FileDownloadService.prototype.downloadFileByPath = function (filePath) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl + "/download", { filePath: filePath }, {
            headers: headers,
            responseType: 'blob'
        });
    };
    FileDownloadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _app_constants__WEBPACK_IMPORTED_MODULE_2__["Configuration"] }
    ]; };
    FileDownloadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Configuration"]])
    ], FileDownloadService);
    return FileDownloadService;
}());



/***/ })

}]);
//# sourceMappingURL=ClientEdi-clientedi-module.js.map