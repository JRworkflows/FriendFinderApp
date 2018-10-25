var friends = [
    {
        name: "JJ",
        photo: "JJ@example.com",
        scores: [
            5,
            4,
            4,
            1,
            2,
            3,
            1,
            5,
            4,
            3
        ]

    }
];

$("#submitBtn").click(function() {
    var radioValue = 
    $("input[name= 'rating1']:checked").val();
        console.log(radioValue)
})