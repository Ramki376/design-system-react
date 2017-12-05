define(['exports', 'react', '../../../../../components/combobox', '../../../../../components/icon', 'lodash.escaperegexp', '../../../../../components/icon-settings'], function (exports, _react, _combobox, _icon, _lodash, _iconSettings) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _combobox2 = _interopRequireDefault(_combobox);

	var _icon2 = _interopRequireDefault(_icon);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var accounts = [{ id: '1', label: 'Acme', subTitle: 'Account • San Francisco', type: 'account' }, { id: '2', label: 'Salesforce.com, Inc.', subTitle: 'Account • San Francisco', type: 'account' }];

	var accountsWithIcon = accounts.map(function (elem) {
		return Object.assign(elem, {
			icon: _react2.default.createElement(_icon2.default, {
				assistiveText: 'Account',
				category: 'standard',
				name: elem.type
			}) });
	});

	var Example = function (_React$Component) {
		_inherits(Example, _React$Component);

		function Example(props) {
			_classCallCheck(this, Example);

			var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

			_this.state = {
				inputValue: '',
				selection: []
			};
			return _this;
		}

		_createClass(Example, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					_iconSettings2.default,
					{ iconPath: '/assets/icons' },
					_react2.default.createElement(_combobox2.default, {
						id: 'combobox-unique-id',
						isOpen: true,
						labels: {
							placeholder: 'Search Salesforce'
						},
						menuPosition: 'relative',
						onChange: function onChange(event, _ref) {
							var value = _ref.value;

							console.log('onChange', value);
							_this2.setState({ inputValue: value });
						},
						onRequestRemoveSelectedOption: function onRequestRemoveSelectedOption(event, data) {
							_this2.setState({
								inputValue: '',
								selection: []
							});
						},
						onSubmit: function onSubmit(event, _ref2) {
							var value = _ref2.value;

							console.log('onSubmit', value);
							_this2.setState({ selection: [{
									label: value,
									icon: _react2.default.createElement(_icon2.default, {
										assistiveText: 'Account',
										category: 'standard',
										name: 'account'
									}) }] });
						},
						onSelect: function onSelect(event, data) {
							console.log('onSelect', data);
							_this2.setState({ selection: data.selection });
						},
						options: accountsWithIcon,
						selection: this.state.selection,
						value: this.state.selectedOption ? this.state.selectedOption.label : this.state.inputValue
					})
				);
			}
		}]);

		return Example;
	}(_react2.default.Component);

	Example.displayName = 'ComboboxExample';
	exports.default = Example;
});