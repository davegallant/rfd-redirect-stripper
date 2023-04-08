package-chrome:
	cd ./extensions/chrome && zip -r -FS ../../rfd-redirect-chrome-extension.zip * --exclude '*.git*'

package-firefox:
	cd ./extensions/firefox && zip -r -FS ../../rfd-redirect-firefox-extension.zip * --exclude '*.git*'

