var otp_type = 0; // Email
var reset_type = 0; // Email
var spinner = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
window.onload = function () {
    render();
};
function render() {


    // window.recaptchaVerifier2 = new firebase.auth.RecaptchaVerifier('recaptcha-container2');
    // recaptchaVerifier2.render();

    if(document.getElementById("recaptcha-container") !== null){
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
    }
}
function readURL(input, column) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#'+column).attr('src', e.target.result);
            $('#'+column+'-cross').show();
        }
        reader.readAsDataURL(input.files[0]);
    }
}
try {

    $(document).ready(function(){

        $(document).on('click', '.toggle-password', function() {
            console.log("toggle");
            $(this).toggleClass("bi-eye bi-eye-slash");

            var input = $(this).data("field");
            input = $("#"+input);
            input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
        });


        $("#activate-now").hide();
        $('.tab a').on('click', function (e) {
          e.preventDefault();

          $(".login-response").hide();

          $(this).parent().addClass('active');

          $(this).parent().siblings().removeClass('active');

          var href = $(this).attr('href');
          $('.forms > form').hide();
          $(href).fadeIn(500);
          // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        // recaptchaVerifier.render();
    });

        $('.log-change a').on('click', function (e) {
          e.preventDefault();
          $(".login-response").hide();

          var href = $(this).attr('href');
          $('.forms > form').hide();
          if(window.recaptchaVerifier2 == undefined){
            window.recaptchaVerifier2 = new firebase.auth.RecaptchaVerifier('recaptcha-container2');
            recaptchaVerifier2.render();
        }

        //  console.log(href);
//console.log($(href+"-tab"));
$(href+"-tab").addClass('active');
$(href+"-tab").siblings().removeClass('active');


$(href).fadeIn(500);
});
        $.validator.addMethod("email_or_mobile", function(value, element) {
            return /^\d{9,10}$/.test(value) ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) //email
        }, "Please enter valid email or mobile");
        $("#sign-up").validate({
            rules: {
                email: {
                    required: true,
                    email_or_mobile: true
                },
            }
        });
        $("#forget").validate({
            rules: {
                email: {
                    required: true,
                    email_or_mobile: true
                },
            }
        });
        $("#personal-info").validate({
            focusInvalid: true,
            invalidHandler: function(form, validator) {

                console.log(validator.numberOfInvalids());

                if (!validator.numberOfInvalids())
                    return;

                $('html, body').animate({
                    scrollTop: $(validator.errorList[0].element).offset().top
                }, 500);
                $(validator.errorList[0].element).focus();

            }
        });
    });
    //Double range slider input
    let doubleSlider = $(".payment-range-input, .year-range-input").slider({
        formatter: function () {
            let input = $("[data-slider-id=" + $(this).attr("id") + "]");
            var values = input.slider("getValue");
            input.parents("form, .form").find("input.min").val(values[0]);
            if(values[1] <= 499999)
            {
                input.parents("form, .form").find("input.max").val(values[1]);
            }
            else
            {
                input.parents("form, .form").find("input.max").val("+"+values[1]);
            }
        },
    });

    let payment_initial_values_cash = $(".payment-range-input.cash").slider("getValue");
    let payment_initial_values_finance = $(".payment-range-input.finance").slider("getValue");
    let year_initial_values = $(".year-range-input").slider("getValue");
    let minPayment_cash = payment_initial_values_cash[0];
    let minPayment_finance = payment_initial_values_finance[0];
    let maxPayment_cash = payment_initial_values_cash[1];
    let maxPayment_finance = payment_initial_values_finance[1];
    let minYear = year_initial_values[0];
    let maxYear = year_initial_values[1];
    //set initial values for Min & Max payment
    $(".cash #min-payment").val(minPayment_cash);
    $(".finance #min-payment").val(minPayment_finance);
    $(".cash #max-payment").val(maxPayment_cash);
    $(".finance #max-payment").val(maxPayment_finance);
    console.log(minYear);
    $(".filter input#min-year").val(minYear);
    $(".filter input#max-year").val(maxYear);

    // Single Range slider Input
    var singleSlider = $(".single-range-input").slider({
        formatter: function () {
            let input = $("[data-slider-id=" + $(this).attr("id") + "]");
            var value = input.slider("getValue");
            // var value = $('.single-range-input').slider('getValue');
            input.parent().find("input[type=number]").val(value);
            input.parent().find(".range-val").text(value);
        },
    });
    var singleSlider = $(".single-range-input.balloon-payment").slider({
        formatter: function () {
            let input = $("[data-slider-id=" + $(this).attr("id") + "]");
            var value = input.slider("getValue");
            // var value = $('.single-range-input').slider('getValue');
            input.parent().find("input[type=number]").val(value);
        },
    });
    // $(".single-range-input.balloon-payment").slider("disable");
    //set initial values for Min & Max payment
    var single_initial_value = $(".single-range-input").slider("getValue");
    $(".single-range-input")
    .parent()
    .find("input[type=number]")
    .val(single_initial_value);
} catch (error) {
    console.warn(error);
}

// Make Driver Seats Slider works when click on nav-tabs
$("#driver-seat .nav-tabs .nav-link").each(function () {
    $(this).on("click", function () {
        if ($(this).attr("data-toggle") == "Go to slide 1") {
            $('.swiper-pagination-bullet[aria-label="Go to slide 1"]').click();
        } else if ($(this).attr("data-toggle") == "Go to slide 2") {
            $('.swiper-pagination-bullet[aria-label="Go to slide 2"]').click();
        } else {
            $('.swiper-pagination-bullet[aria-label="Go to slide 3"]').click();
        }

        $(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".nav-link")
        .removeClass("active");
    });
});

$(".swiper-pagination .swiper-pagination-bullet").each(function () {
    $(this).on("click", function () {
        if ($(this).attr("aria-label") == "Go to slide 1") {
            $("#driver-seat .nav-tabs .nav-link").removeClass("active");
            $('.nav-link[data-toggle="Go to slide 1"]').addClass("active");
        } else if ($(this).attr("aria-label") == "Go to slide 2") {
            $("#driver-seat .nav-tabs .nav-link").removeClass("active");
            $('.nav-link[data-toggle="Go to slide 2"]').addClass("active");
        } else if ($(this).attr("aria-label") == "Go to slide 3") {
            $("#driver-seat .nav-tabs .nav-link").removeClass("active");
            $('.nav-link[data-toggle="Go to slide 3"]').addClass("active");
        }

        // $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active')
    });
});

//Set initial Values to Monthly Payment & Cash-down based on the range value
// let monthlyInitVal = $('.estimate input[data-type=monthly-payment]').val();
// let cashInitVal    = $('.estimate input[data-type=cash-down]').val();
// $('.estimate #monthly-payment').val(monthlyInitVal);
// $('.estimate #cash-down').val(cashInitVal);

// // /Chanage Monthly Payment & Cash-down when user change range type and visa versa
// $('.estimate input[type=range]').on('input', function() {
//   let target = `#${$(this).attr('data-type')}`;
//   $(target).val($(this).val())
// });
// $('.estimate input[type=number]').on('input', function() {
//   let target = `${$(this).attr('id')}`;
//   $(`[data-type=${target}]`).val($(this).val())
// })

// SET INITAIL VALUES FOR INPUT BASED ON INPUT RANGE VALUE
$("input[type=number]").each(function () {
    let intialVal = $(this).parent().siblings("input[type=range]").val();
    $(this).attr("value", intialVal);
});

$(".range-val").each(function () {
    let intialVal = $(this).parent().siblings("input").val();
    $(this).text(intialVal);
});

// Change input number when changing range value
$("input[type=number]")
.parents()
.siblings("input[type=range]")
.each(function () {
    $(this).on("input", function () {
        $(this).siblings().find("input[type=number]").val($(this).val());
        $(this).siblings().find("input[type=number]").keyup();
    });
});
$(".range-val")
.parents()
.siblings("input[type=range]")
.each(function () {
    $(this).on("input", function () {
        $(this).siblings().find(".range-val").text($(this).val());
    });
});

//change range input when hardcode input value
$("input[type=number]").each(function () {
    $(this).on("input", function () {
        $(this).parents().siblings("input[type=range]").val($(this).val());
    });
});

// Add Class Active to to checkbox container
// $("aside .form-check").on("click", function (e) {
//     if ($(this).find("input").attr("checked")) {
//         $(this).find("input").removeAttr("checked");
//         $(this).removeClass("active");
//     } else {
//         $(this).find("input").attr("checked", "checked");
//         $(this).addClass("active");
//     }

//     //checked itesms indicator number
//     if (
//         $(this).parent(".accordion-body").find(".form-check.active:not(.all)")
//             .length < 1
//     ) {
//         $(this).parents(".make .accordion-item").removeClass("active");
//         $(this)
//             .parents(".make .accordion-item")
//             .find(".filter-num")
//             .addClass("d-none");
//     } else {
//         $(this).parents(".make .accordion-item").addClass("active");
//         $(this)
//             .parents(".make .accordion-item")
//             .find(".filter-num")
//             .removeClass("d-none");
//         $(this)
//             .parents(".make .accordion-item")
//             .find(".filter-num")
//             .text(
//                 $(this)
//                     .parent(".accordion-body")
//                     .find(".form-check.active:not(.all)").length
//             );
//     }

//     // Check all models of particular car
//     if ($(this).hasClass("all")) {
//         if ($(this).find("input").attr("checked")) {
//             $(this)
//                 .parent(".accordion-body, div")
//                 .children(".form-check:not(.active)")
//                 .trigger("click");
//         } else {
//             $(this)
//                 .parent(".accordion-body, div")
//                 .children(".form-check.active")
//                 .trigger("click");
//         }
//     }
//     //check all models of all cars
//     if ($(this).hasClass("all-global")) {
//         if ($(this).find("input").attr("checked")) {
//             $(this)
//                 .siblings(".accordion")
//                 .find(".accordion-body")
//                 .children(".form-check.all:not(.active)")
//                 .trigger("click");
//         } else {
//             $(this)
//                 .siblings(".accordion")
//                 .find(".accordion-body")
//                 .children(".form-check.all.active")
//                 .trigger("click");
//         }
//     }

//     // check whether one element at least is unchecked
//     if (
//         $(this)
//             .parent(".accordion-body, div")
//             .find(".form-check:not(.all):not(.active)").length == 0
//     ) {
//         $(this)
//             .parent(".accordion-body, div")
//             .find(".form-check.all")
//             .addClass("active");
//         $(this)
//             .parent(".accordion-body, div")
//             .find(".form-check.all")
//             .find("input")
//             .attr("checked", "checked");
//         $(".form-check.all-global").addClass("active");
//         $(".form-check.all-global").find("input").attr("checked", "checked");
//     } else {
//         $(this)
//             .parent(".accordion-body, div")
//             .find(".form-check.all")
//             .removeClass("active");
//         $(this)
//             .parent(".accordion-body, div")
//             .find(".form-check.all")
//             .find("input")
//             .attr("checked", false);
//         $(".form-check.all-global").removeClass("active");
//         $(".form-check.all-global").find("input").attr("checked", false);
//     }

//     //remove class checked from "All" in make
//     if (
//         $(this).parents(".make").find(".form-check:not(.all):not(.active)")
//             .length == 0
//     ) {
//         $(".form-check.all-global").addClass("active");
//         $(".form-check.all-global").find("input").attr("checked", "checked");
//     } else {
//         $(".form-check.all-global").removeClass("active");
//         $(".form-check.all-global").find("input").attr("checked", false);
//     }
// });

// Show & hide adjust terms box
// $(".card .adjust-terms").on("click", function (e) {
    $(document).on('click','.card .adjust-terms',function(e)
    {
        e.preventDefault();
        $(this).parents(".card-body").find(".terms-box").addClass("show");
    });
// $(".card .terms-box .arrow-down").on("click", function (e) {
    $(document).on('click','.card .terms-box .arrow-down',function(e)
    {
        e.preventDefault();
        $(this).parents(".terms-box").removeClass("show");
    });

// Show mobile filter when clicking on "filter button"
$(".mobile-filter #filter").on("click", function () {
    $("aside.filter").addClass("show");
    $("html, body").css("overflow", "hidden");
});
// Hide mobile filter when clicking on "X" icon
$("aside.filter .filter-head .icon").on("click", function () {
    $("aside.filter").removeClass("show");
    $("html, body").css("overflow-y", "scroll");
});

$(window).on("scroll", function () {
    // add class "active" to nav item when its associated section comes into view
    if($("section").length){
        $("section").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 100) {
                var bId = `${$(this).attr("id")}`;
                $("#vehicle-nav a").removeClass("active");
                $('#vehicle-nav a[href="' + "#" + bId + '"]').addClass("active");
            }
        });
    }
    if($("#hero h3").length){
    // Show/hide vehicle-nav & car title on tob of the page
    if ($(window).scrollTop() >= $("#hero h3").offset().top - 1) {
        $("#vehicle-nav").addClass("show");
    } else {
        $("#vehicle-nav").removeClass("show");
    }
}
if($("#calc-payment").length){
    //Show/hide sticky "Purchase" button
    if ($(window).scrollTop() >= $("#calc-payment").offset().top) {
        $("#car-details #calc-payment .calc-result").addClass("show");
    } else {
        $("#car-details #calc-payment .calc-result").removeClass("show");
    }
}
    // Show & Hide Bottom "Book Now" Button
    // if($(window).scrollTop() > $('#calc-payment .card').offset().top ) {
    //   $('#calc-payment .calc-result').addClass('show')
    // } else {
    //   $('#calc-payment .calc-result').removeClass('show')
    // }
});

// view full details modal on car-details page
// $('#car-details .modal-body_nav .nav-link').click(function() {
//   $(this).parents('.nav-item').siblings().find('.nav-link').removeClass('active');
//   let pos = $(`${$(this).parent('a').attr('data-href')}`).prevAll();
//   pos.each(function() {
//     console.log(pos.offset().top - pos.parents('.modal-body').offset().top);
//   })
//   $(".modal-body").animate({
//     scrollTop: pos.offset().top - pos.parents('.modal-body').offset().top - 73
//   }, 100)
// })

document
.querySelectorAll("#car-details .modal-body_nav .nav-link")
.forEach((e) => {
    e.addEventListener("click", function () {
        document
        .querySelectorAll("#car-details .modal-body_nav .nav-link")
        .forEach((e) => {
            e.classList.remove("active");
        });
        e.classList.add("active");
        let eleId = `${e.parentElement.getAttribute("data-href")}`;
        let pos = document.querySelector(eleId).offsetTop - 73;
        $(".modal-body").animate(
        {
            scrollTop: pos,
        },
        200
        );
    });
});

// Show/Hide full overview details on report modal
$(".overview_nav #toggle-show").click(function () {
    if ($(this).attr("data-hidden") == "true") {
        $(this).parent().addClass("active");
        $(this).attr("data-hidden", "false");
        // $(this).text('Show')
    } else {
        $(this).parent().removeClass("active");
        $(this).attr("data-hidden", "true");
        // $(this).text('Hide')
    }
});
// Select between Finance Providers
$(".providers li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let dataMonthly = $(this).attr("data-monthly");
    let dataCash = $(this).attr("data-cash");
    let dataDuration = $(this).attr("data-duration");
    let dataPlan = $(this).attr("data-plan-id");
    let interestRate = $(this).attr("data-interest-rate");
    $(this)
    .parent()
    .siblings(".card")
    .find("input#monthly-payment, input#monthly-range")
    .val(dataMonthly);
    $(this)
    .parent()
    .siblings(".card, .calc-result")
    .find("span[data-value=monthly-value]")
    .text(dataMonthly);
    $(this)
    .parent()
    .siblings(".card")
    .find("input#cash-down, input#cash-range")
    .val(dataCash);
    $(this)
    .parent()
    .siblings(".card")
    .find("input#down-payment")
    .val(dataCash);
    $(this).parent().siblings(".card").find("input[name=interest_rate]").val(interestRate);
    $(this).parent().siblings(".card").find("input#plan_id").val(dataPlan);
    $("#monthly-value-finance").text(monthlyCalculator());
    $("#monthly-value-finance2").text($("#monthly-value-finance").text());
    $("#cash-value-finance").text(dataCash / 2);

    dataDuration = dataDuration.split(',');
    var duaration_html = "";
    var l=dataDuration.length;
    var xchecked='';
    for(var i = 0; i < dataDuration.length; i++) {
		// Trim the excess whitespace.
		dataDuration[i] = dataDuration[i].replace(/^\s*/, "").replace(/\s*$/, "");
		// Add additional code here, such as:
		xchecked='';
		if(i==(l-1)) xchecked='checked';
		duaration_html += '<label for="'+dataDuration[i]+'">\
		<input type="radio" name="months" value="'+dataDuration[i]+'" id="'+dataDuration[i]+'" class="d-none" '+xchecked+'>\
		<span>'+dataDuration[i]+'</span>\
		</label>';
	}
    if(duaration_html != "")
    {
        $(this)
        .parent()
        .siblings(".card")
        .find("#months")
        .html(duaration_html);
    }

    $slider = $('#single-range-input');
    $slider.slider('setAttribute', 'max', dataCash);
    $slider.slider('setValue', dataCash / 2);




    $(this).parent().siblings(".card").find("span#cash-value").text(dataCash);
        //show loading spinner for 1s
        $(".loading-spinner").removeClass("d-none");
        $(".loading-spinner").siblings("span").addClass("d-none");
        setTimeout(() => {
            $(".loading-spinner").addClass("d-none");
            $(".loading-spinner").siblings("span").removeClass("d-none");
        }, 1000);
    });
function monthlyCalculator(){
  var months  = $('input[type=radio][name=months]:checked').val();
  var cash_down = $('#single-range-input').val();
  var car_price = $('input[name=car_price]').val();
  var interestRate = $('input[name=interest_rate]').val();
  var cash_remain = car_price - cash_down;

  var  monthly = 0 ;
  if((typeof months !== "undefined" && months != 0) && (typeof cash_remain !== "undefined" &&  cash_remain != 0))
  {
      monthly = (((cash_remain + ((cash_remain * interestRate / 100) * months /12 )))/ months).toFixed(0);
  }
  return monthly;
}
// $('input[type=radio][name=months],#down-payment').change(function(e)
$(document).on('change','input[type=radio][name=months],#down-payment',function()
{
    var months  = $('input[type=radio][name=months]:checked').val();
    var cash_down = $('#single-range-input').val();
    var car_price = $('input[name=car_price]').val();
    var interestRate = $('input[name=interest_rate]').val();
    var cash_remain = car_price - cash_down;

    var  monthly = 0 ;
    if((typeof months !== "undefined" && months != 0) && (typeof cash_remain !== "undefined" &&  cash_remain != 0))
    {
        monthly = (((cash_remain + ((cash_remain * interestRate / 100) * months /12 )))/ months).toFixed(0);
    }
    $("#cash-value-finance").text(cash_down.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $("#monthly-value-finance").text(monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $("#monthly-value-finance2").text(monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
});

//check tabs when submitting the form on the modal
$(".modal form").submit(function (e) {
    // e.preventDefault();
    // $(this).find('[aria-label="Close"]').trigger("click");
    // let modalTab = $(`[name=${$(this).attr('data-check')}]`);
    // modalTab.addClass('checked');

    // let deliveryCost = $('.modal form select option:selected').attr('data-cost');
    // let warrantyCost = $('.modal form input:checked').attr('data-cost');
    // let addOnCost    = $('.modal form input:checked').attr('data-cost');
    // $($(this).parents('.modal').attr('data-value')).text(deliveryCost);
    // $($(this).parents('.modal').attr('data-value')).text(warrantyCost)
    // $($(this).parents('.modal').attr('data-value')).text(addOnCost);
    // console.log(addOnCost);
});
$(".warranty-select").on("click", function(){
    // $("#warrantyCost").html($(this).data('cost'));
});
$(".warranty-select").on("click", function(e){
    // e.preventDefault();
    $("#warrantyCost").html(numberWithCommas($(".warranty-select:checked").data('cost')));
    $("#warrantyCost2").html(numberWithCommas($(".warranty-select:checked").data('cost')));
    $("#warranty_id").val($(".warranty-select:checked").data('id'));
    $(".sr-warranty").removeClass("d-none");

    totlCost();
    $("#selectWarranty").modal('hide');
});
function numberWithCommas(x) {
    if(typeof x !== "undefined" && x != 0)
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$(".warranty-clear").on("click", function(){
    $("#warrantyCost").html(0);
    $("#warranty_id").val("");
    $(".sr-warranty").addClass("d-none");
    totlCost();
    $("#selectWarranty").modal('hide');
});

$(".addon-select").on("click", function(e){
    // e.preventDefault();
    addOn_cost = 0;
    addons = [];
    $("#addOnCost").html("0");
    $(".addon-select").each(function(e,i){
        if($(i).is(":checked")){
            addOn_cost += parseFloat($(i).data("cost"));
            addons.push($(i).data('id'));
        }
    });
    adns = addons.join(',');
    if(adns.length > 0){
        $("#addons").val(adns);
    }else{
        $("#addons").val('');
    }
    $("#addOnCost").html(numberWithCommas(addOn_cost));
    $("#addOnCost2").html(numberWithCommas(addOn_cost));
    $(".sr-addon").removeClass("d-none");
    totlCost();
    $("#addOn").modal('hide');
});
$('input[name^="payment_bank_radio"]').on('click', function(){
    $("#payment_bank").val($('input[name^="payment_bank_radio"]:checked').val());
});

$(".addon-clear").on("click", function(){
    $("#addOnCost").html(0);
    $(".sr-addon").addClass("d-none");
    $("#login-btn").attr("disabled", "disabled").prepend(spinner);
    totlCost();
    $("#addOn").modal('hide');
});
$("#payment_submit, #payment_submit_online").submit(function (e) {
    e.preventDefault();

    if($("#payment_submit").valid()){
        var data = new FormData();
        var pmethod = 0;
        var file = false;
        if($(this).attr('id') == 'payment_submit'){
            pmethod = 1;
            jQuery.each($('input[name="receipt"]')[0].files, function(i, file) {
                data.append('receipt', file);
                file = true;
                data.append('document', $("#document").val());
                data.append('payment_bank', $('input[name^="payment_bank"]:checked').val());
            });
            if(!file){
                $("#message-receipt").html($("#upload-file-msg").val());
                $("#message-receipt").show();
            }else{
                $("#message-receipt").hide();
            }
        }


        data.append('order', $("#order_id").val());
        data.append('payment_method', pmethod);
        data.append('_token', $($('input[name^="_token"]')[0]).val());

        $.ajax({
            type: "post",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            url: $(this).attr('action'),
            dataType: "json",
            success: function(response) {
                if(pmethod == 0){
                    $("#accordionExample").toggleClass("d-none");
                    $("#payment_info").removeClass("d-none");
                    $(".card-processing").hide();

                }else{
                    if(response.error != undefined && response.error.length > 0){
                    $("#message-receipt").html(response.error);
                    $("#message-receipt").show();
                }else{
                    $("#payment_submit").hide();
                    $("#payment_info").removeClass("d-none");
                    $(".card-processing").hide();
                }
                }

            }
        });
    }


});
$("#login").submit(function (e) {
    e.preventDefault();
    $("#login-btn").append(spinner);
    $("#activate-now").hide();
    $.ajax({
        type: "post",
        data: $(this).serialize(),
        url: $(this).attr('action'),
        dataType: "json",
        success: function(response) {
            $("#login-response").hide();
            $("#login-btn span").remove();
            if(response.status){
                $(".login-response").html("");
                $("#login-modal").modal("hide");
                if($("#finance-tab").hasClass("active") && $("#payment").length > 0 && $("#plan_id").val() > 0){
                    $("#payment").submit();
                }else if($("#cash-payment").length > 0 && $("#cash-tab").hasClass("active") ){
                    $("#cash-payment").submit();
                }
                else{
                    location.reload();
                }
            }else{
                $("#login-response").html(response.message);
                $("#activate-now").attr("data-id", response.uid);
                $("#user_id").val(response.uid);
                $("#activate-now").attr("data-auth", response.auth_type);
                $("#login-response").show();
                $(".activate-now").show();
            }
        },
        error: function(jqXHR, exception) {
            $("#login-btn span").remove();
            $("#login-btn").removeAttr("disabled");
            $(".login-response").show();
            $("#login-response").show();
            $(".login-response").html("");
            $(".login-response").css("color", "red");
            $.each(jqXHR.responseJSON, function (key, item)
            {
                $(".login-response").append("<span>"+item+"</span><br>");
            });
        }
    });
});
$("#subscribe").submit(function (e) {
    e.preventDefault();
    $("#subscribe-btn").attr("disabled", "disabled").prepend(spinner);
    $.ajax({
        type: "post",
        data: $(this).serialize(),
        url: $(this).attr('action'),
        dataType: "json",
        success: function(response) {
            $("#subscribe-btn span").remove();
            if(response.status){
                $("#subscribe-btn").removeAttr("disabled");
                $(".subscribe-response").show();
                $(".subscribe-response").html(response.message);
                $(".subscribe-response").css("color", 'green');
            }
        },
        error: function(jqXHR, exception) {
            $("#subscribe-btn span").remove();
            $("#subscribe-btn").removeAttr("disabled");
            $(".subscribe-response").show();
            $("#subscribe-response").show();
            $(".subscribe-response").css("color", "red");
            $(".subscribe-response").html("");
            $.each(jqXHR.responseJSON, function (key, item)
            {
                $(".subscribe-response").append("<span>"+item+"</span><br>");
            });
        }
    });
});
$(".modal-close").click(function(){
    $(this).closest(".modal").modal("hide");
});
$(".subscribe-close").click(function(){
    $(".subscribe-email").val("");
    $("#subscribe-response").html("");
});
$('#subscribe-modal').on('hidden.bs.modal', function () {
    $(".subscribe-email").val("");
    $("#subscribe-response").html("");
})

$("#sign-up").submit(function (e) {
    reset_type = 0;
    $(".reset_type").val(reset_type);
    e.preventDefault();
    $(".login-response").html("");
    $(".login-response").hide();
    if($(this).valid()){
      $("#register-btn").attr("disabled", "disabled").prepend(spinner);

      $.ajax({
        type: "post",
        data: $(this).serialize(),
        url: $(this).attr('action'),
        dataType: "json",
        success: function(response) {
            $("#register-btn span").remove();
            if(response.status){
                $("#user_id").val(response.id);
                $("#register-btn").removeAttr("disabled");
                if(response.phone){
                    console.log("otp status");
                    sendOTP($("#reg_email").val());
                    otp_type = 1;
                    $("#otp_type").val("1");
                }else{
                    $(".login-response").show();
                    $(".login-response").html(response.message);
                    $(".login-response").css("color", 'green');
                    $("#sign-up").fadeOut();
                    $("#otp-div").fadeIn();
                }
            }else{
            }
        },
        error: function(jqXHR, exception) {
            $("#register-btn").removeAttr("disabled");
            $("#register-btn span").remove();
            $(".login-response").html("");
            $(".login-response").css("color", "red");
            $(".login-response").show();
            $.each(jqXHR.responseJSON, function (key, item)
            {
                $(".login-response").append("<span>"+item+"</span><br>");
            });
        }
    });
  }

});
$("#activate-now").on("click", function(){
    reset_type = 0;
    $(".reset_type").val(reset_type);
    var id = $(this).data("id");
    var type = $(this).data("auth");
    $("#login-btn").attr("disabled", "disabled").prepend(spinner);
    if(type == "0"){
        otp_type = 1;
        $("#otp_type").val("1");
        sendOTP($("#email").val());
        $("#login-btn span").remove();
    }else{
        otp_type = 0;
        $("#otp_type").val("0");
        $.ajax({
            type: "get",
            url: $(this).data('url')+"/"+id,
            dataType: "json",
            success: function(response) {
                console.log(response);
                $("#otp-div").show();
                $("#login").hide();
                $("#otp-message").html(response.message);
                $("#otp-message").show();
                $("#login-btn span").remove();
            },
            error: function(jqXHR, exception) {
                $("#login-btn span").remove();
            }
        });
    }
});
$(document).on("keyup", "#reg_email", function(){
    var val = $(this).val();
    if(val.length > 0){
      var n =Number($(this).val());
      console.log(n);
      if(n != NaN && n > -1 ){
        $('#flagDiv').show();
        $(this).addClass('pl5');
        otp_type = 1;
        $("#otp_type").val("1");
        // $(this).attr("placeholder", "05XXXXXXXX")
    }else{
        otp_type = 0;
        $("#otp_type").val("0");
        $(this).removeClass('pl5');
        $('#flagDiv').hide();
        // $(this).attr("placeholder", "name@email.com")
    }
}

});

$(document).on("keyup", "#forget_email", function(){
    var val = $(this).val();
    if(val.length > 0){
      var n =Number($(this).val());
      console.log(n);
      if(n != NaN && n > -1 ){
        $('#flagDiv2').show();
        $(this).addClass('pl5');
        otp_type = 1;
        $("#otp_type").val("1");
        // $(this).attr("placeholder", "05XXXXXXXX")
    }else{
        otp_type = 0;
        $("#otp_type").val("0");
        $(this).removeClass('pl5');
        $('#flagDiv2').hide();
        // $(this).attr("placeholder", "name@email.com")
    }
}

});

$("#otp-div").submit(function (e) {
    console.log("otp type"+otp_type);
    e.preventDefault();
    if($(this).valid()){
        $("#otp-btn").attr("disabled", "disabled").prepend(spinner);
        if(otp_type == 1){
            verify(reset_type);
        }else{

            $.ajax({
                type: "post",
                data: $(this).serialize(),
                url: $(this).attr('action'),
                dataType: "json",
                success: function(response) {
                    $("#otp-btn").removeAttr("disabled");
                    $("#otp-btn span").remove();
                    if(response.status){
                        $(".login-response").html("");
                        $(".login-response").html(response.message);
                        $(".login-response").css("color", 'green');
                        $("#sign-up").fadeOut();
                        $("#otp-div").fadeIn();
                        if(reset_type == 1){
                          $("#otp-div").hide();
                          $("#reset-div").show();
                          return;
                      }
                      setTimeout(function(){
                        location.reload();
                    }, 2000);
                  }else{
                  }
              },
              error: function(jqXHR, exception) {
                $("#otp-btn span").remove();
                $("#otp-btn").removeAttr("disabled");
                $(".login-response").show();
                $(".login-response").html("");
                $(".login-response").css("color", "red");
                $.each(jqXHR.responseJSON, function (key, item)
                {
                    $(".login-response").append("<span>"+item+"</span><br>");
                });
            }
        });
        }

    }

});

$("#reset-div").submit(function (e) {
    $("#reset-btn span").remove();
    e.preventDefault();
    if($(this).valid()){
        $("#reset-btn").attr("disabled", "disabled").prepend(spinner);
        $.ajax({
            type: "post",
            data: $(this).serialize(),
            url: $(this).attr('action'),
            dataType: "json",
            success: function(response) {
                $("#reset-btn").removeAttr("disabled");
                $("#reset-btn span").remove();
                if(response.status){
                    $("#reset-btn span").remove();
                    $(".login-response").html("");
                    $(".login-response").html(response.message);
                    $(".login-response").css("color", 'green');
                    $("#reset-div").fadeOut();
                    $("#login").fadeIn();
                    setTimeout(function(){
                        $(".login-response").html("").hide();
                    }, 2000);
                }else{
                }
            },
            error: function(jqXHR, exception) {
                $("#reset-btn span").remove();
                $("#reset-btn").removeAttr("disabled");
                $(".login-response").show();
                $(".login-response").html("");
                $(".login-response").css("color", "red");
                $.each(jqXHR.responseJSON, function (key, item)
                {
                    $(".login-response").append("<span>"+item+"</span><br>");
                });
            }
        });

    }

});


$("#forget").submit(function (e) {
    e.preventDefault();
    $("#forget-btn span").remove();
    $(".login-response").hide();
    $("#forget-btn").attr("disabled", "disabled").prepend(spinner);
    if(otp_type == 1){
        $.ajax({
            type: "post",
            data: $(this).serialize(),
            url: $(this).attr('action'),
            dataType: "json",
            success: function(response) {
                $("#forget-btn span").remove();
                $("#forget-btn").removeAttr("disabled");
                if(response.status){
                    reset_type = 1;
                    $(".reset_type").val(reset_type);
                    $("#user_id").val(response.id);
                    sendOTP($("#forget_email").val(), "forget");
                    $(".login-response").css("color", "green");
                    $(".login-response").show();
                    /*setTimeout(function(){
                        $("#resend_phone").show();
                    }, 5000);*/
                // $(".login-response").html(response.message);
            }else{
                $("#forget-response").css("color", "red");
                $(".login-response").show();
                $("#forget-response").html(response.message);
                $("#forget-btn span").remove();
                $("#forget-btn").removeAttr("disabled");
            }
        },
        error: function(jqXHR, exception) {
            $("#forget-btn span").remove();
            $("#forget-btn").removeAttr("disabled");
            $("#forget-response").show();
            $("#forget-response").html("");
            $(".login-response").css("color", "red");
            $(".login-response").show();
            $.each(jqXHR.responseJSON, function (key, item)
            {
                $(".login-response").append("<li class='alert alert-danger'>"+item+"</li><br>");
                return false;
            });
        }
    });

        return;
    }
    $.ajax({
        type: "post",
        data: $(this).serialize(),
        url: $(this).attr('action'),
        dataType: "json",
        success: function(response) {
            if(response.status){
                $(".login-response").css("color", "green");
                $(".login-response").show();
                $("#user_id").val(response.id);
                $(".login-response").html(response.message);
                $("#forget").fadeOut();
                $("#otp-div").fadeIn();
                reset_type = 1;
                $(".reset_type").val(reset_type);
                setTimeout(function(){
                    $("#resend_email").show();
                }, 5000);
            }else{
                $("#forget-response").css("color", "red");
                $(".login-response").show();
                $("#forget-response").html(response.message);
            }
            $("#forget-btn span").remove();
        },
        error: function(jqXHR, exception) {
            $("#forget-btn span").remove();
            $("#forget-btn").removeAttr("disabled");
            $("#forget-response").show();
            $("#forget-response").html("");
            $(".login-response").css("color", "red");
            $(".login-response").show();
            $.each(jqXHR.responseJSON, function (key, item)
            {
                $(".login-response").append("<li class='alert alert-danger'>"+item+"</li><br>");
                return false;
            });
        }
    });
});
$(".resend-otp").click(function (e) {
    e.preventDefault();
    $("#otp-div").hide();
    $("#forget").show();
   // $("#forget-btn").trigger("click");
});
$("#login-popup .close").click(function () {
   $('#login-modal').hide();
});

//Cancel form submit on Modal
$(".modal button[data-role=cancel]").click(function () {
    let modalTab = $(`[name=${$(this).parents("form").attr("data-check")}]`);
    modalTab.removeClass("checked");
    $(this).parents("form").find("input").prop("checked", false);
    $(this).parents("form").find("label").removeClass("checked");
    $(this).parents("form").find("select").val([]);
});

//Add class checked to label when check it's input
$(
    "#checkout .modal input[type=checkbox], #checkout .modal input[type=radio]"
    ).on("input", function () {
        $(this).parents("label").toggleClass("checked");
    });

    $("#checkout .modal input[type=radio]").on("input", function () {
        $(this).parents("label").addClass("checked");
        $(this).parents("label").siblings().removeClass("checked");
    });

//show alert if the user didn't select a delivery location
// $(' [data-role=purchase]').click(function() {
//   if($('.calc-tabs input#calc-delivery').hasClass('checked')) {
//     $('.vehicle-info li[data-value=delivery-cost] .value, .calc-tabs input[id=calc-delivery]').removeClass('danger')
//   } else {
//     $('.vehicle-info li[data-value=delivery-cost] .value, .calc-tabs input[id=calc-delivery]').addClass('danger')
//   }
// })

// Move Monthly-Payment & Down Payment to top of the card on mobile
let target = $("#calc-payment .btn-group");
if ($(window).innerWidth() <= 768) {
    target.prependTo("#calc-payment .host");
}

if ($(window).innerWidth() <= 992) {
    $("#track-order .progress-tracker").removeClass("progress-tracker--center");
    $("#track-order .progress-tracker").addClass("progress-tracker--vertical");
}

// Change position of blue box containing "monthly-payment" & "down payment"
$(window).resize(function () {
    if ($(this).innerWidth() <= 992) {
        $("#track-order .progress-tracker").removeClass(
            "progress-tracker--center"
            );
        $("#track-order .progress-tracker").addClass(
            "progress-tracker--vertical"
            );
    } else {
        $("#track-order .progress-tracker").addClass(
            "progress-tracker--center"
            );
        $("#track-order .progress-tracker").removeClass(
            "progress-tracker--vertical"
            );
    }

    if ($(this).innerWidth() <= 768) {
        target.prependTo("#calc-payment .host");
    } else {
        target.prependTo("#calc-payment .home");
    }
});

//Show car details when clicking th "show details button"
$(".show-details-order").click(function () {
    id = $(this).data("id");
    $(".order-detail").hide();
    $("#order-detail-"+id).toggle();
});

$("a.show-details").click(function () {
    $(this).parents("body").find(".payment-details").addClass("show");
});


//Hide car details when clicking the "close" icon
$(".payment-details .close").click(function () {
    $(this).parents(".payment-details").removeClass("show");
});

$(".order-detail .close").click(function () {
    console.log("in close");
    $(this).parents(".order-detail").hide();
});



// Activate Promocode button when user add a promocode
$("#promoCode").on("keyup", function () {
    if ($(this).val().length != 0) {
        $(this).siblings(".btn").addClass("active");
    } else {
        $(this).siblings(".btn").removeClass("active");
    }
});

// add "success" message under upload button
function uploadImage(column, route, order_id){
    $("#order_id").val(order_id);
    $("#document").val(column);

    var data = new FormData();
    data.append('order', order_id);

    data.append('_token', $($('input[name^="_token"]')[0]).val());

    if(column == 'salary_letter'){
        jQuery.each($('input[name="salary_letter"]')[0].files, function(i, file) {
            data.append('salary_letter', file);
        });
    }else if(column == 'id_card'){
        jQuery.each($('input[name="id_card"]')[0].files, function(i, file) {
            data.append('id_card', file);
        });
    }else if(column == 'receipt'){
        console.log("receipt");
        jQuery.each($('input[name="receipt"]')[0].files, function(i, file) {
            data.append('receipt', file);
        });
    }else if(column == 'policy'){
        console.log("policy");
        jQuery.each($('input[name="policy"]')[0].files, function(i, file) {
            data.append('policy', file);
        });
    }else if(column == 'license'){
        jQuery.each($('input[name="license"]')[0].files, function(i, file) {
            console.log("license");
            data.append('license', file);
        });
        /*jQuery.each($('#upload-license-2')[0].files, function(i, file) {
            column = 'license_2';
            data.append('license_2', file);
        });*/
    }
    data.append('document', column);

    $.ajax({
        type: "post",
        data: data,
        url: route,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(response) {
            if(response.error != undefined && response.error.length > 0){
               $("#"+column)
               .parents(".upload-box")
               .find(".message")
               .text(response.error)
               .removeClass("success")
               .addClass("error").fadeIn().delay(5000).fadeOut();
           }else{
            $("#"+column+"_upload").val("1");
            $("#"+column)
            .parents(".upload-box")
            .find(".message")
            .text(response.message)
            .addClass("success").fadeIn().delay(5000).fadeOut();
            if(column != 'policy')
                $("#"+column).attr('src', response.path);
            else
                $("#"+column).attr('href', response.path);

            $("#"+column+"-1")
            .parents(".upload-box")
            .find(".message")
            .text($("#file_success").val())
            .addClass("success").fadeIn().delay(5000).fadeOut();;
            $("#"+column+"-1").attr('src', response.path);
            $("#"+column+"-cross").show();
            $("#license_to").val("1");

            if(column == 'policy'){
                $("#"+column)
                .parents(".upload-box")
                .find(".upload").hide();
            }
            $("#"+column).show();
        }

    },
    error: function(jqXHR, exception) {
        $("#"+column+"-1")
        .parents(".upload-box")
        .find(".message")
        .text("File upload error")
        .removeClass("success")
        .addClass("error").fadeIn().delay(5000).fadeOut();;
    }
});

}
$(document).on("click", ".cross-btn", function(){
    var placeholder = $(this).data("id");
    $("#"+$(this).data("id")).attr("src", $("#"+placeholder+"-placeholder").data("src"));
    var column = $(this).data("id");
    var route = $(this).data('route');
    $(this).hide();
    $.ajax({
        type: "get",
        url: route+"/"+column,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(response) {
            console.log();
            $("#"+column+"_upload").val("0");
            $("#"+column)
            .parents(".upload-box")
            .find(".message")
            .text($("#file_delete").val())
            .addClass("success").delay(5000).fadeOut();
            if(column == 'policy'){
                $(".upload").show();
                $("#"+column).hide();
            }

        },
        error: function(jqXHR, exception) {
            $(this)
            .parents(".upload-box")
            .find(".message")
            .text("File delete error")
            .removeClass("success")
            .addClass("error").delay(5000).fadeOut();
        }
    });
});
$("#upload-form").submit(function (e) {
    e.preventDefault();
    if($("#order_type").val() == "1")
    {
        var error = false;
        if($("#salary_letter_upload").val() == "0"){
            $("#message-salary").removeClass("success").addClass("error").fadeIn().delay(5000).fadeOut();;
            error = true;
        }else{
            $("#message-salary").hide();
        }
        if($("#id_card_upload").val() == "0"){
         $("#message-id").removeClass("success").addClass("error").fadeIn().delay(5000).fadeOut();;
         error = true;
     }else{
        $("#message-id").hide();
    }
    if($("#license_upload").val() == "0"){
        $("#message-license").removeClass("success").addClass("error").fadeIn().delay(5000).fadeOut();;
        error = true;
    }else{
        $("#message-license").hide();
    }
    if(error){
        $(".message").hide();
        return false;
    }
}

$("#personal-info").submit();
});
$("#mada-form").submit(function (e) {
    e.preventDefault();
    $('input[name="payment_method"]').val("0");
    $("#personal-info").submit();
});
$("#bank-form").submit(function (e) {
    e.preventDefault();
    $('input[name="payment_method"]').val("1");
    /*if($("#receipt_upload").val() == "0"){
        $("#message-receipt").removeClass("success").addClass("error").fadeIn().delay(5000).fadeOut();;
        return;
    }*/
    $("#personal-info").submit();
});
$("input[name=upload]").on("change", function () {
    $(this)
    .parents(".upload-box")
    .find(".message")
    .text($("#file_success").val())
    .addClass("success");
});


// Move to next step when submitting the "Personal info" Form
function delivery_tab() {


    if($("#personal-info").valid()){
        if($("#order_type").val() == "0" && $("#license_upload").val() == 0){
            $(".message").hide();
            $(".message-upload").show();
            $(".message-upload").removeClass("success").addClass("error").fadeIn().delay(5000).fadeOut();;
            return false;
        }
        $(".message-upload").hide();
        $("#personal-info")
        .parents(".card")
        .find("#fin-delivery-tab, #cash-delivery-tab")
        .removeAttr("disabled")
        .trigger("click");
        $("#personal-info")
        .parents(".card")
        .find("#app-tab, #ID-tab")
        .addClass("completed");
        $(window).scrollTop(0);
    }else{
//
}


};

// Move to next step when submitting the "Delivery" Form
$("form#delivery").on("submit", function (e) {
    e.preventDefault();
    if($("#latlong").val().length == 0){
        $("#del-error").removeClass("d-none");
        $("#del-error").css("position", "relative");
    }else{
        $("#del-error").html("").addClass("d-none");

        $(this)
        .parents(".card")
        .find("#car-care-tab")
        .removeAttr("disabled")
        .trigger("click");
        $(this)
        .parents(".card")
        .find("#fin-delivery-tab, #cash-delivery-tab")
        .addClass("completed");
        $(window).scrollTop(0);
    }

});

// Move to next step when submitting the "Delivery" Form
$("form#car-care-info").on("submit", function (e) {
    e.preventDefault();
    if($("#latlong").val().length == 0){
        $("#del-error").removeClass("d-none");
        $("#del-error").css("position", "relative");
    }else{
        $("#del-error").html("").addClass("d-none");

        $(this)
        .parents(".card")
        .find("#document-tab, #checkout-tab")
        .removeAttr("disabled")
        .trigger("click");
        $(this)
        .parents(".card")
        .find("#fin-delivery-tab, #cash-delivery-tab, #car-care-tab")
        .addClass("completed");
        $(window).scrollTop(0);
    }

});

// Move to next step when submitting the "Delivery" Form
$("form#delivery select").on("change", function (e) {
    $("span[data-value=delivery-cost]").text(
        $(this).find("option:selected").attr("data-cost")
        );

});


$("#monthly-payment,#cash-down").keyup(function(e) {
    e.preventDefault();
    let monthly_payment = Number($("#monthly-payment").val());
    let cash_down = Number($("#cash-down").val());
    estimated_budget = 0;
    estimated_budget = ((monthly_payment * 60) + cash_down);

    $("#estimated_budget").contents().get(0).nodeValue = estimated_budget.toLocaleString();
    $('#calculated_price').val(estimated_budget);
});

// Hide Contact address form if it'sidentical to billing address at "My Profie" page
$("#billing-info #contact-address").on("input", function () {
    if ($(this).attr("checked")) {
        $(this)
        .parents(".contact-address")
        .find(".form-group")
        .removeClass("d-none");
        $(this).attr("checked", false);
    } else {
        $(this)
        .parents(".contact-address")
        .find(".form-group")
        .addClass("d-none");
        $(this).attr("checked", "checked");
    }
});

// Track order timeline

// ALYWAYS BE ON BOTOM OF THE PAGE
// Initialize popovers
const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
    );
const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
//if($("#mainCarousel").length){
// // Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    infinite: false,
    Navigation: false,
});
//}
if($('[data-fancybox="gallery"]').length){
// Initialise Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
        on: {
            change: (carousel, to) => {
                // Sync Carousel slide
                // ===
                const $el = Fancybox.getInstance()
                .getSlide()
                .$trigger.closest(".carousel__slide");

                const slide = mainCarousel.slides.find((slide) => {
                    return slide.$el === $el;
                });

                mainCarousel.slideTo(slide.index, {
                    friction: 0,
                });
            },
        },
    },
});
}


