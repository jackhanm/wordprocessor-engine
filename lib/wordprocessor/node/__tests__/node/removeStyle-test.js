jest.autoMockOff();

let Node = require("./../../Node.js");
let Style = require("./../../../Style.js");
let ContainerNode = require("./../../container/ContainerNode.js");
let TextNode = require("./../../content/TextNode.js");

let Markup = require("./../../../Markup.js");


describe('Node', function() {

    describe("style", function() {

        it("Should support remove style", function() {
            let rootNode = Markup.parse(`
                <ContainerNode>
                    <TextNode pathRef="1"/>
                </ContainerNode>
            `);
            let _node = Markup.findNodeByTestRef(rootNode, "1");
            _node.addStyle(Style.BOLD);

            let changeCallback = jest.genMockFunction();
            _node.addChangeListener(changeCallback);
            _node.removeStyle(Style.BOLD);
            expect(changeCallback).toBeCalled();
            expect(_node.hasStyle(Style.BOLD)).toBeFalsy();
        });
    });
});