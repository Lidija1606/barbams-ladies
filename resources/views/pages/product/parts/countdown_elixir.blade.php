<div class="row count-down-elixir">
  <div class="col-12-ne">
    <h2>{{__('order.elixir-count')}}</h2>
    <h3 id="counter" class="elixir-count">{{$elixirCounter->value}}</h3>
  </div>
</div>
<script>
    let displayNumber = document.getElementById('counter').innerHTML;
    let count = 172800;
    let index = 0;

    let timer = setInterval(() => {
        index += 1;
        displayNumber -= Math.floor(Math.random()*3);
        count--;

        if ( displayNumber <= 3 || count <= 3 ) {
            displayNumber = 99;
            clearInterval(timer);
        }

        $('.elixir-count').html(displayNumber);

    },4000);
</script>
