<div class="row">
	<div class="col-12 social-icons">
		{{--<div class="row">--}}
		{{--<div class="col-12">--}}
		<a  href="{{ !in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? 'https://www.facebook.com/barbamselixir' : 'https://www.facebook.com/barbams.me' }}" target="_blank"><div class="facebook"></div></a>
		<a href="{{ in_array(\App\Helpers\Helper::getVisitorCountryCode(), ['AE', 'IN', 'SA']) ? 'https://instagram.com/barbams.middleeast' : 'https://www.instagram.com/barbams.europe' }}" target="_blank"><div class="instagram"></div></a>
		<a href="https://www.youtube.com/channel/UCRueUc440wTF0iHHLBofVRg" target="_blank"><div class="youtube"></div></a>
		<a href="mailto:info@barbams.com?Subject=Web%20page%20contact" target="_blank"><div class="mail"></div></a>
		{{--</div>--}}

	</div>
<div class="col-12 footer-pages-links">
	<p class="show-on-mobile-only"><a href="{{'/'}}">{{__('footer.home')}}</a></p>
	<p><a href="{{'/about/faq'}}">{{__('footer.barbams.faq')}}</a></p>
	<p><a href="{{'/about/crew'}}">{{__('footer.barbams.crew')}}</a></p>
	<p><a href="{{'/about/contact'}}">{{__('footer.barbams.contact')}}</a></p>
</div>
    @if(!in_array($countryCode, \App\Helpers\Helper::getBalkansCountries()))
		<span class="white-line"></span>
		@if(\App\Helpers\Helper::getVisitorCountryCode() == 'HR')
			<div class="col-12 payment-icons center text-center multiple-cards">
				<a target="_blank" href="https://www.visa.com.hr/">
					<img class="card-icon visa" src="{{asset('/img/visa.png')}}">
				</a>
				<a target="_blank" href="https://www.mastercard.rs">
					<img class="card-icon mastercard" src="{{asset('/img/mastercard.png')}}">
				</a>
				<a target="_blank" href="https://www.mastercard.hr/hr-hr/consumers/find-card-products/debit-cards/maestro-debit.html">
					<img class="card-icon maestro" src="{{asset('/img/maestro.png')}}">
				</a>
				<a target="_blank" href="https://www.diners.hr/">
					<img class="card-icon diners" src="{{asset('/img/diners-club.jpg')}}">
				</a>
				<a target="_blank" href="http://www.discover.com/">
					<img class="card-icon discover" src="{{asset('/img/discover.jpg')}}">
				</a>
			</div>
		@else
			<div class="col-12 payment-icons center text-center">
				<img src="{{asset('/img/card_icons.png')}}">
			</div>
		@endif
		<div class="col-12 second-footer-pages-links text-center">
			@if(\App\Helpers\Helper::getVisitorCountryCode() == 'HR')
				<a href="{{ asset('pdfs/Uvjeti-Poslovanja.pdf') }}" target="_blank">Uvjeti poslovanja</a>
				<a href="#" class="terms-footer-modal hidden">Terms and conditions</a>
				<a href="#" class="privacy-link hidden">Privacy Policy</a>
				<a href="#" class="delivery-link hidden">Delivery/Shipping Policy</a>
				<a href="#" class="refund-link hidden">Refund/Cancellation Policy</a>
			@else
				<a href="#" class="terms-footer-modal">Terms and conditions</a>
				<a href="#" class="privacy-link">Privacy Policy</a>
				<a href="#" class="delivery-link">Delivery/Shipping Policy</a>
				<a href="#" class="refund-link">Refund/Cancellation Policy</a>
			@endif
		</div>
</div>

<div class="tingle-content-wrapper">
	<div class="terms-modal-placeholder modal-content-placeholder terms-modal"
		 country_enabled="{{ !in_array($countryCode, array_merge(\App\Helpers\Helper::getBalkansCountries(), ['HR'])) ? 1 : 0 }}"
	>
		<h2>{{__('terms.title')}}</h2>
		<p><span class="read-more-wrap">{{__('terms.readMoreWrap')}}</span></p>
		<div class="more-text-content">
			<div id="more-text">
				<p><span class="read-more-target">
			{{__('terms.readMoreTarget')}}</span></p>
				<p class="read-more-target">{{__('terms.p1')}}</p>
				<p class="read-more-target">{{__('terms.p2')}}</p>
				<p class="read-more-target">{{__('terms.p3')}}</p>
				<p class="more">{{__('terms.p4')}}</p>
				<p class="more">{{__('terms.p5')}}</p>
				<p class="more">{{__('terms.p6')}}</p>
				<p class="more">{{__('terms.p7')}}</p>
				<p class="more">{{__('terms.p8')}}</p>
				<p class="more">{{__('terms.p9')}}</p>
				<p class="more">{{__('terms.p10')}}</p>
				<p class="more">{{__('terms.p11')}}</p>
				<p class="more">{{__('terms.p12')}}</p>
				<p class="more">{{__('terms.p13')}}</p>
				<p class="more">{{__('terms.p14')}}</p>
				<p class="more">{{__('terms.p15')}}</p>
				<p class="more">{{__('terms.p16')}}</p>
				<p class="more">{{__('terms.p17')}}</p>
				<p class="more">{{__('terms.p18')}}</p>
				<p class="more">{{__('terms.p19')}}</p>
				<p class="more">{{__('terms.p20')}}</p>
				<p class="more">{{__('terms.p21')}}</p>
			</div>
			<button id="read-more-btn">Read More</button>
		</div>
	</div>
	<div class="terms-footer-modal-placeholder modal-content-placeholder terms-footer-modal">
		<h2>{{__('terms.title')}}</h2>
		<p>{{__('terms.readMoreWrap')}}</p>
				<p>
                {{__('terms.readMoreTarget')}}</p>
				<p class="read-more-target">{{__('terms.p1')}}</p>
				<p class="read-more-target">{{__('terms.p2')}}</p>
				<p class="read-more-target">{{__('terms.p3')}}</p>
				<p class="more">{{__('terms.p4')}}</p>
				<p class="more">{{__('terms.p5')}}</p>
				<p class="more">{{__('terms.p6')}}</p>
				<p class="more">{{__('terms.p7')}}</p>
				<p class="more">{{__('terms.p8')}}</p>
				<p class="more">{{__('terms.p9')}}</p>
				<p class="more">{{__('terms.p10')}}</p>
				<p class="more">{{__('terms.p11')}}</p>
				<p class="more">{{__('terms.p12')}}</p>
				<p class="more">{{__('terms.p13')}}</p>
				<p class="more">{{__('terms.p14')}}</p>
				<p class="more">{{__('terms.p15')}}</p>
				<p class="more">{{__('terms.p16')}}</p>
				<p class="more">{{__('terms.p17')}}</p>
				<p class="more">{{__('terms.p18')}}</p>
				<p class="more">{{__('terms.p19')}}</p>
				<p class="more">{{__('terms.p20')}}</p>
				<p class="more">{{__('terms.p21')}}</p>
	</div>
	<div class="privacy-modal-placeholder modal-content-placeholder terms-modal">
		<h2>Privacy Policy</h2>

		<p>
			<strong>INFORMATION GATHERED BY Barbams.com</strong>. This is Barbams.com’s (“Barbams.com”) online privacy
			policy (“Policy”).
			This policy applies only to activities Barbams.com engages in on its website and does not apply to Barbams.com
			activities that are "offline" or unrelated to the website.

		</p>
		<p>
			Barbams.com collects certain anonymous data regarding the usage of the website. This information does not
			personally identify users, by itself or in combination with other information, and is gathered to improve the
			performance of the website. The anonymous data collected by the Barbams.com website can include information
			such as the type of browser you are using, and the length of the visit to the website. You may also be asked
			to provide personally identifiable information on the Barbams.com website, which may include your name,
			address, telephone number and e-mail address. This information can be gathered when feedback or e-mails are
			sent to Barbams.com, when you register for services, or make purchases via the website. In all such cases you
			have the option of providing us with personally identifiable information.

		</p>

		<ul style="list-style: disc !important;">
			<li>USE AND DISCLOSURE OF INFORMATION. Except as otherwise stated below, we do not sell, trade or rent your
				personally identifiable information collected on the site to others. The information collected by our site
				is used to process orders, to keep you informed about your order status, to notify you of products or
				special offers that may be of interest to you, and for statistical purposes for improving our site. We will
				disclose your Delivery information to third parties for order tracking purposes or process your check or
				money order, as appropriate, fill your order, improve the functionality of our site, perform statistical and
				data analyses deliver your order and deliver promotional emails to you from us. For example, we must release
				your mailing address information to the delivery service to deliver products that you ordered.
			</li>
			<li>All credit/debit cards' details and personally identifiable information will NOT be stored, sold, shared,
				rented or leased to any third parties
			</li>
		</ul>
		<p>
			<strong>COOKIES</strong>. Cookies are small bits of data cached in a user’s browser. Barbams.com utilizes
			cookies to determine whether or not you have visited the home page in the past. However, no other user
			information is gathered.
		</p>
		<p>
			Barbams.com may use non-personal "aggregated data" to enhance the operation of our website, or analyze
			interest in the areas of our website. Additionally, if you provide Barbams.com with content for publishing or
			feedback, we may publish your user name or other identifying data with your permission.
		</p>
		<p>
			Barbams.com may also disclose personally identifiable information in order to respond to a subpoena, court
			order or other such request. Barbams.com may also provide such personally identifiable information in response
			to a law enforcement agencies request or as otherwise required by law. Your personally identifiable
			information may be provided to a party if Barbams.com files for bankruptcy, or there is a transfer of the
			assets or ownership of Barbams.com in connection with proposed or consummated corporate reorganizations, such
			as mergers or acquisitions.
		</p>
        <p>By clicking I AGREE, you agree to receive marketing text messages or e-mails from Barbams.com at the number provided,
            including messages sent by autodialer. Consent is not a condition of any purchase. Message and data rates may apply.
            Message frequency varies.</p>
		<ul style="list-style: disc !important;">
			<li>
				<strong>SECURITY</strong> . Barbams.com takes appropriate steps to ensure data privacy and security
				including
				through
				various hardware and software methodologies. However, Barbams.com cannot guarantee the security of any
				information that is disclosed online.
			</li>
			<li>
				<strong>OTHER WEBSITES.</strong> Barbams.com is not responsible for the privacy policies of websites to
				which it links. If
				you provide any information to such third parties different rules regarding the collection and use of your
				personal information may apply. We strongly suggest you review such third party’s privacy policies before
				providing any data to them. We are not responsible for the policies or practices of third parties. Please be
				aware that our site may contain links to other sites on the Internet that are owned and operated by third
				parties. The information practices of those Web sites linked to our site is not covered by this Policy.
				These other sites may send their own cookies or clear GIFs to users, collect data or solicit personally
				identifiable information. We cannot control this collection of information. You should contact these
				entities directly if you have any questions about their use of the information that they collect.
			</li>
		</ul>
		<p>MINORS. Barbams.com does not knowingly collect personal information from minors under the
			age of 18. Minors are not permitted to use the Barbams.com website or services, and
			Barbams.com requests that minors under the age of 18 not submit any personal information to
			the website. Since information regarding minors under the age of 18 is not collected,
			Barbams.com does not knowingly distribute personal information regarding minors under the
			age of 18.
		</p>
		<p>
			CORRECTIONS AND UPDATES. If you wish to modify or update any information Barbams.com has received, please
			contact info@Barbams.com.
		</p>
		<ul style="list-style: disc !important;">
			<li>MODIFICATIONS OF THE PRIVACY POLICY. Barbams.com. The Website Policies and Terms & Conditions would be
				changed or updated occasionally to meet the requirements and standards. Therefore the Customers’ are
				encouraged to frequently visit these sections in order to be updated about the changes on the website.
				Modifications will be effective on the day they are posted.
			</li>
		</ul>
	</div>
	<div class="delivery-modal-placeholder modal-content-placeholder terms-modal">
		<h2>DELIVERY/ SHIPPING POLICY</h2>
		<p>Thank you for visiting and shopping at www.barbams.com. Following are the terms and conditions that
			constitute our Shipping Policy.
		</p>
		<ul style="list-style-type: disc !important;">
			<li>We are shipping our products with Fetchr Courier Service.</li>
			<li>We are delivering worldwide</li>
			<li>The time duration for the shipment to reach the customer in Local Market are 2-3 days. For International
				Market are 10-12 days. If we are experiencing a high volume of orders, shipments may be delayed by a few
				days. Please allow additional days in transit for delivery. If there will be a significant delay in the
				shipment of your order, we will contact you via email or telephone.
			</li>
			<li>Delivery Charge for Local Marketplace – from 21aed to 30aed</li>
			<li>Delivery Charge for International and GCC countries – from 60aed to 150aed</li>
			<li>Delivery Charge may vary from country to country. Please Contact us for more info for your country</li>

		</ul>
		<h3>Multiple Shipment/ Orders / Bookings</h3>
		<p>The multiple booking/orders/shipments may result in multiple postings to the cardholder’s monthly
			statement</p>
	</div>
	<div class="refund-modal-placeholder modal-content-placeholder terms-modal">
		<h2>Refund and Cancellation Policy</h2>
		<h3>Refund Policy:</h3>
		<p>
			<strong>Refunds will be done only through the Original Mode of Payment.</strong>
			We accept returns within 7 days of receipt, only if their delivery packaging has not been opened or the
			products are damaged or wrong product. Please notify us and return the box in its original packaging. In such
			instances, we will endeavor to send you another or refund the payment.
			We can only accept returns of products that have not been tampered with, are sealed and remain in the original
			packaging. If all these conditions are met, please ship your products back to us using a registered courier
			service and we will issue a full refund. Please note that we reserve the right to refuse any returned
			shipments if the product has been used or tampered with. Shipping & Handling fees are non-refundable.

		</p>
		<h3>Cancellation Policy:</h3>
		<p>
			Customer can cancel their order within 24 hours; refunds will be made back to the payment solution used
			initially by the customer. Please allow for up to 45days for the refund transfer to be completed.
		</p>
	</div>
	<div class="hr-terms-modal-placeholder modal-content-placeholder hr-terms-modal center">
		<img class="card-icon diners " src="{{asset('/img/barbams-uvjeti.jpg')}}" width="100%">
	</div>
</div>
@endif
<script src="{{asset('js/jquery-3.3.1.min.js')}}"></script>
<script src="{{asset('js/jquery.bxslider.min.js')}}"></script>
<script src="{{asset('js/jquery.validate.min.js')}}"></script>
<script src="{{asset('js/tingle.min.js')}}"></script>
<script src={{asset('js/jquery.marquee.min.js')}}></script>
@if($view_name == 'pages-about-results')
<script src="{{asset('js/magnific-popup.js')}}"></script>
@endif
@if($view_name == 'pages-home')
<script src="{{mix('js/testimonials_homepage_carousel.js')}}"></script>
@endif

@if(!in_array($countryCode, \App\Helpers\Helper::getBalkansCountries()))
<script src="{{asset('js/modals.js')}}"></script>
@endif
<script src="{{mix('js/script.js')}}"></script>
