(function ($) {

	"use strict";

	var artsFund = {

		aRandomVariable: false,

		// options: {

		// 	phonePattern: "(999) 999-9999"

		// },

		el: {

			// form: $('form[data-checkout=true]'),

			nav : $('nav'),

			navItems : $('.nav__item'),

			navItemIcons : $('.nav__item').find('.icon'),

			subNavs : $('.subnav')

		},

		navigationToggle: function () {

			artsFund.el.nav.toggleClass('is-active');

		},

		navigationHandler: function (e) {

			if(e.target.href === "#"){

				e.preventDefault();

			}

			artsFund.el.navItemIcons.addClass('icon-plus-sign');	
			artsFund.el.navItemIcons.removeClass('icon-minus-sign');
			artsFund.el.navItems.removeClass('selected');

			if(!$(e.currentTarget).find('.subnav').hasClass('is-active')){

				artsFund.el.subNavs.removeClass('is-active'); //close all subnavs

				$(e.currentTarget).addClass('selected');

				$(e.currentTarget).find('.subnav').addClass('is-active');

				$(e.currentTarget).find('.icon').removeClass('icon-plus-sign');
				$(e.currentTarget).find('.icon').addClass('icon-minus-sign');

			} else {

				artsFund.el.subNavs.removeClass('is-active'); //close all subnavs

			}

		},

		events: function () {

			// Navigation Subnavs
			$('.nav__item.has-subnav').on('click', artsFund.navigationHandler);

			// Main mobile navigation toggle button
			$('.nav-toggle').on('click', artsFund.navigationToggle);

		},

		init: function () {

			// call all internal methods here
			artsFund.events();


		}

	};

	artsFund.init();

}(jQuery));