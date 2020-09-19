#!/bin/node
/**
 * Please install this dependecies in dev (moment, inquirer)
 * https://momentjs.com/docs/
 * https://www.npmjs.com/package/inquirer
 * use yarn add -D <dependecy>
 */

const fs = require("fs")
const moment = require("../node_modules/moment")
const inquirer = require("../node_modules/inquirer")
const { exec } = require('child_process')
const [, , command, ...params] = process.argv
let filename = `${require('../package.json').name} ${moment().format('YYYY-MM-DD-HH-mm')}.apk`
const apkPath = "android\\app\\build\\outputs\\apk\\release\\app-release.apk"
const outputFolder = "outputs"

if (command === 'connect') {
	exec('adb shell ip route', (err, stdout) => {
		if (err) {
			console.error('error: No devices/emulators found')
		} else {
			const devices = stdout.split(/\r\n/g).map(d => {
				let key = 'ip'
				const device = d.split(' ').reduce((ret, s, i) => {
					if (i % 2 === 1) {
						key = s
					} else {
						ret[key] = s
					}
					return ret
				}, {})
				if (device.src) return device
				return
			}).filter(d => Boolean(d))
			if (devices.length > 0) {
				let selectedDevice = []
				if (params.length > 0) {
					selectedDevice = devices.filter(({ dev }) => dev === params[0])
				} else {
					selectedDevice = devices.filter((_, i) => i === 0)
				}
				if (selectedDevice.length > 0) {
					exec(
						`adb disconnect && adb tcpip 5555 && adb connect ${selectedDevice[0].src}:5555`,
						(err, msg) => {
							if (err) {
								console.error(err)
							} else {
								console.log(msg)
							}
						}
					)
				} else {
					console.error('error: No devices/emulators found')
				}
			}
		}
	})
} else if (command === 'env') {
	const env = command
	const envFile = require(`./envs/${env}.json`)
	fs.writeFileSync("src/env.json", JSON.stringify(envFile.app, undefined, 2))
} else if (command === 'move') {
	if (params[0]) filename = params[0]
	exec(`copy "${apkPath}" "${outputFolder}\\${filename}"`, (err, msg) => {
		if (err) {
			console.error(err)
		} else {
			console.log(msg)
		}
	})
} else if (command === 'install') {
	exec('cd outputs && dir /b', async (_, choices) => {
		choices = choices.split('\r\n').filter(l => l !== '')
		const { selectedApk } = await inquirer.prompt([{
			type: "list",
			name: "selectedApk",
			message: "Select apk you want to install",
			choices
		}])
		exec(`adb install "${outputFolder}/${selectedApk}"`, (err, msg) => {
			if (err) console.error(err)
			else console.log(msg)
		})
	})
} else {
	console.error(`No command '${command}' found`)
}