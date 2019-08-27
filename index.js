import node from "xmlbuilder/lib/XMLElement";
import builder from "xmlbuilder/lib/index";

var xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', { 'type': 'git' }, 'git://github.com/oozcitak/xmlbuilder-js.git')
    .end({ pretty: true });

console.log(xml);