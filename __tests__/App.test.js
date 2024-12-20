"use strict";
/**
 * @format
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
var react_1 = require("react");
var App_tsx_1 = require("../src/App.tsx");
// Note: import explicitly to use the types shipped with jest.
var globals_1 = require("@jest/globals");
// Note: test renderer must be required after react-native.
var react_test_renderer_1 = require("react-test-renderer");
(0, globals_1.it)('renders correctly', function () {
    react_test_renderer_1.default.create(<App_tsx_1.default />);
});
