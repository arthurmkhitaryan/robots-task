const robotDetectedParachuteState = {
    rob1PositionOnParachute: 0,
    rob2PositionOnParachute: 0,
};

let pos1Init = 5;
let pos2Init = 10;

let rob1DetectedParachute = 0;
let rob2DetectedParachute = 0;

let rob1Pos = pos1Init;
let rob2Pos = pos2Init;

function left() {
    rob1Pos -= 1;
    rob2Pos -= 1;

    console.log({ rob1Pos, rob2Pos, rob1DetectedParachute, robotDetectedParachuteState })
}

function right() {
    rob1Pos += 1;
    rob2Pos += 1;

    console.log({ rob1Pos, rob2Pos, rob2DetectedParachute, robotDetectedParachuteState })

}

function isDetectedParachute() {
    if (rob1Pos === pos1Init) {
        rob1DetectedParachute = 1;
        if (rob1DetectedParachute === 2) {
            robotDetectedParachuteState.rob1PositionOnParachute = rob1Pos;
        }
    } else if (rob1Pos === pos2Init) {
        rob1DetectedParachute = 2;
        if (rob1DetectedParachute === 2) {
            robotDetectedParachuteState.rob1PositionOnParachute = rob1Pos;
        }
    }

    if (rob2Pos === pos2Init) {
        rob2DetectedParachute = 1;
        if (rob2DetectedParachute === 2) {
            robotDetectedParachuteState.rob2PositionOnParachute = rob2Pos;
        }
    } else if (rob2Pos === pos1Init) {
        rob2DetectedParachute = 2;
        if (rob2DetectedParachute === 2) {
            robotDetectedParachuteState.rob2PositionOnParachute = rob2Pos;
        }
    }
}

function stop(robPos) {
    return (
        (robPos === pos1Init || robPos === pos2Init) &&
        (robPos === robotDetectedParachuteState.rob1PositionOnParachute || robPos === robotDetectedParachuteState.rob2PositionOnParachute)
    );
}

function robMeet() {
    let step = 1;

    while (true) {

        for (let i = 0; i <= step; i++) {
            left();
            isDetectedParachute();
            if (stop(rob2Pos)) {
                console.log({ robots: "meet" });
                return;
            }
        }

        for (let i = 0; i <= step + 1; i++) {
            right();
            isDetectedParachute();
            if (stop(rob1Pos)) {
                console.log({ robots: "meet" });
                console.log({ rob1Pos, rob2Pos, rob2DetectedParachute, robotDetectedParachuteState })
                return;
            }
        }

        step++;
    }
}

robMeet();
