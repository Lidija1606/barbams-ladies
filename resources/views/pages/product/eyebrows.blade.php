@extends('layouts.product')
@section('content')

    <div class="row" id="product-cont">
        <div class="col-6">
            <div class="product-img-cont radius15-shadow">
                <a href="#" class="noselect imgP" title="Previous image" onclick="imgP();return false;">&#8249;</a>
                <a href="#" class="noselect imgN" title="Next image" onclick="imgN();return false;">&#8250;</a>
                <img src="../img/eyebrows/image1.png" alt="Product images" id="product-img">
            </div>
        </div>
        <div class="col-6 product-info">
            <div>
                <h1>Eyebrows Elixir</h1>
                <p>Barbam's Elixir for Ladies is an elixir for the growth of new eyebrow hairs and strength of the
                    existing ones.
                    <button title="Click for more info" class="barbams-button product-more-button"
                            onclick="productShowMore()">More
                    </button>
                </p>
                <p class="font-very-heavy">Price: <s style="font-size: 130%; color: red;"></s> 2000 DIN (Shipping is 250
                    DIN)</p>
                <p>A bottle lasts for: 40 – 50 days</p>
                <form action="order.php" method="post">
                    <button name="product" value="2" class="barbams-button order-button">Order</button>
                </form>
            </div>
        </div>
        <div class="col-6 product-info-more ">
            <div class="row">
                <div class="col-10-ne product-info">
                    <h1>Eyebrows Elixir</h1>
                </div>
                <div class="col-2-ne">
                    <a title="Close more info" href="#" onclick="productHideMore();return false;">X</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p>Thin eyebrows. Drawn on eyebrows. Poorly drawn on eyebrows. Gaps in the eyebrows... These are
                        just some of the struggles which our better halves have to deal with.<br>
                        <br>That's why we came up with the Brow Elixir which stimulates the growth of eyebrows and makes
                        the existing hairs stronger! Fill in the gaps and shape your eyebrows the way you want to once
                        and for all!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <h1 class="col-12">Instructions for Use</h1>
        <div class="col-6">
            <img class="product-usage radius15-shadow" src="../img/eyebrows/usage.png" alt="Instructions for use">
        </div>
        <div class="col-6">
            <p>Dispense a few drops of the Elixir onto your finger pads and rub them into your eyebrows gently. You can
                dispense them onto a cotton bud. Don’t wash your eyebrows for 4 hours, because that’s how long it takes
                for the Elixir to start working.
                <br>
                <br>The elixir comes with a warranty, where if your eyebrows don’t become thicker within 3 months, we
                return your money.</p>
        </div>
    </div>
    </div>
@stop

@section('pageSpecificScripts')
    <script src="../js/eyebrows.js?v=2"></script>
@stop