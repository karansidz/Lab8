/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe("pushToHistory function", () => {

 	test("Stack is empty at start", () => {
 		expect(history.state).toBe(null);
 		expect(history.length).toBe(1);
 	});

 	test("Settings", () => {
 		let settingsState = pushToHistory("settings", 0);
 		expect(settingsState.state).toEqual({page: "settings"});
 		expect(settingsState.length).toBe(history.length);
 	});

 	test("Entry", () => {
 		let entryState = pushToHistory("entry", 4);
 		expect(entryState.state).toEqual({page: "entry4"});
 		expect(entryState.length).toBe(history.length);
 	});

 	test("By default", () => {
 		let defaultState = pushToHistory("", 0);
 		expect(defaultState.state).toEqual({});
 		expect(defaultState.length).toBe(history.length);
 	});


 });

