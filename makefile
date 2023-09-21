######################################################################

install:
	@echo "Installing dependencies..."
	@npm install

######################################################################

run-start:
	@echo "Launching the application..."
	@shadow-cljs watch app

######################################################################

all: install run-start

######################################################################

webpack:
	@echo "configuring webpack..."
	@npm install webpack --save-dev
	@npx webpack --config webpack.config.js
