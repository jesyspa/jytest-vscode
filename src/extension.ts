// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jytest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let up_disposable = vscode.commands.registerCommand('jytest.up', async () => {
		await vscode.commands.executeCommand('cursorMove', { to: 'up' });
	});
	let right_disposable = vscode.commands.registerCommand('jytest.right', async () => {
		await vscode.commands.executeCommand('cursorMove', { to: 'right' });
	});
	let down_disposable = vscode.commands.registerCommand('jytest.down', async () => {
		await vscode.commands.executeCommand('cursorMove', { to: 'down' });
	});
	let left_disposable = vscode.commands.registerCommand('jytest.left', async () => {
		await vscode.commands.executeCommand('cursorMove', { to: 'left' });
	});
	console.log("mouse:" + vscode.TextEditorSelectionChangeKind.Mouse);
	console.log("keyboard:" + vscode.TextEditorSelectionChangeKind.Keyboard);
	console.log("command:" + vscode.TextEditorSelectionChangeKind.Command);
	let event_disposable = vscode.window.onDidChangeTextEditorSelection(
    (evt: vscode.TextEditorSelectionChangeEvent) => {
			console.log("New editorSelectionChange event!");
			console.log("kind: " + evt.kind);
		}
	);

	context.subscriptions.push(up_disposable);
	context.subscriptions.push(right_disposable);
	context.subscriptions.push(down_disposable);
	context.subscriptions.push(left_disposable);
	context.subscriptions.push(event_disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
