//notes for 'Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(2, 3));

/* explanation

So we start by calling cutFruitPieces in here

with the number of apples that were received.

And the result of calling this function

we will then capture

into a variable called, applePieces Okay?

And now let's do the same for the oranges that we receive.

So orangePieces will be also cutFruitPieces

but we call it with the oranges okay?

And so for the first time now

we called one function inside of another function.

So if we now call fruitProcessor with two and three

then this will call the fruitProcessor function

which then in turn will call the cutFruitPieces function

and actually twice.

So once here and once here.

And so let's not actually analyze how the data flows

between these functions.

So down here we are calling the fruitProcessor function

with the arguments two and three.

And as we already know

this will then replace the apples parameter in the function

with the number two anti oranges parameter

and the function with the number three.

So that should be nothing new at this point, right?

We are simply replacing the parameter replace orders

with the actual values, two and three.

And now let's analyze what's gonna happen

with these apple value.

So apple right now holds the number two.

And that value two will then be used

to call the cutPieces function right ?

Now, as we call cutPieces

this too is actually the argument

for the cutPieces function.

And it will basically replace the fruit parameter.

So the fruit placeholder okay?

So now fruit here in this cutPieces function is also two.

And they hope that these arrows here

make the data flow quite obvious.

Then inside this function

of course the fruit is then also two

which we'll get multiplied by a four.

And so the result here is gonna be eight.

And so the result of calling this cutPieces function

with apples will be eight.

And so that's the value that we then store

into the applePieces variable.

And from there we will then built this juice string

that we have down here okay?

So take a moment and analyze exactly how the data flows

from one function to another

because I know that it can be a little bit confusing

especially calling the cutPieces function here

without a tangible number.

So we're calling cutPieces here

not with an actual number that we wrote ourselves

like two or three

but really with the argument that we received

into fruitProcessor.

*/
