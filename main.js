$(document).ready(function() {
    $('.border').on('click', function () {
        $('.section').css('transform', 'translateX(-166px)')
    })

    $('.fas').on('click', function () {
        $('.section').css('transform', 'translateX(1px)')
    })

    $('.btn1').on('click', function () {
        $('.send1').css('background', '#2ED47A')
        $(' .simileText').css('color', '#FFFF')
        $(' .btn1').css('background', '#FFB946')

    })

    $('.btn_2').on('click', function () {
        $('.send2').css('background', '#2ED47A')
        $(' .simileText2').css('color', '#FFFF')
        $(' .btn_2').css('background', '#FFB946')

    })

    $('.btn3').on('click', function () {
        $('.send3').css('background', '#2ED47A')
        $(' .simileText3').css('color', '#FFFF')
        $(' .btn3').css('background', '#FFB946')
        
    })

    $('.btn21').on('click', function () {
        $('.send1').css('display', 'none')
    })

    $('.btn22').on('click', function () {
        $('.send2').css('display', 'none')
    })

    $('.btn23').on('click', function () {
        $('.send3').css('display', 'none')
    })

})

Morris.Area({
    element: 'area-example',
    data: [
      { y: '2006', a: 25},
      { y: '2007', a: 50},
      { y: '2008', a: 45},
      { y: '2009', a: 75},
      { y: '2010', a: 30},
      { y: '2011', a: 55},
      { y: '2012', a: 65},
      { y: '2013', a: 60}
    ],
    xkey: 'y',
    ykeys: ['a', ],
    labels: ['Series A', 'Series B'],
    lineColors: ['dodgerblue'],
    pointFillColors:['black'],
    pointSize: ['4px'],
    fillOpacity: [0.3],
  });

  Morris.Donut({
    element: 'donut-example',

    data: [
      {label: "45%", value: 45, color: '#FFB946',},
      {label: "60%", value: 60, color: '#2ED47A'},
      {label: "20%", value: 20, color: '#F7685B'}
    ],

  });