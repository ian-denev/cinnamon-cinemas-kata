const numberOfRowsPerTheatre = 3;
const numberOfSeatsPerRow = 5;
const totalAvailableSeats = numberOfRowsPerTheatre * numberOfSeatsPerRow;

const allocateSeats = (currentlyTakenSeats, requestedSeats) => {
    if (currentlyTakenSeats == undefined) throw new Error("missing argument: currentlyTakenSeats");
    else if (requestedSeats == undefined) throw new Error("missing argument: requestedSeats");
    else if (typeof (currentlyTakenSeats) != "number") throw new Error("currentlyTakenSeats must be a Number");
    else if (typeof (requestedSeats) != "number") throw new Error("requestedSeats must be a Number");
    else if (requestedSeats < 1 || requestedSeats > 3) throw new Error("only between 1 and 3 seats can be allocated at once");
    else if (currentlyTakenSeats == totalAvailableSeats) throw new Error("all seats are already taken");
    else if (requestedSeats + currentlyTakenSeats > totalAvailableSeats) throw new Error("not enough free seats are available");
    return requestedSeats + currentlyTakenSeats;
}

const fillAuditorium = currentlyTakenSeats => {
    // Allocate seats according to instructions
    while (1) {
        try {
            let seatsToAllocate = Math.floor(Math.random() * 3) + 1; // number between 1 and 3
            currentlyTakenSeats = allocateSeats(currentlyTakenSeats, seatsToAllocate);
        } catch (e) {
            console.log(`Seats taken before no more could be allocated: ${currentlyTakenSeats}`);
            return currentlyTakenSeats;
        }
    }
}

fillAuditorium(0);

module.exports = { allocateSeats, fillAuditorium };
