//- The `Ordered` is used to define totally ordered data-types.
//-
//- ```haskell
//- interface Ordering a: Parity a where
//-     (<=) :: a -> Bool
//-     (<) :: a -> Bool
//-     (<) y =
//-         this.(<=) y && this.(!=) y
//-     (>=) :: a -> Bool
//-     (>=) y =
//-         this.(==) y || ! (this.(<=) y)
//-     (>) :: a -> Bool
//-     (>) y =
//-         ! (this.(<=) y)
//-     compare :: a -> Ordering
//-     compare y =
//-         this.(==)(y)
//-             ? EQ
//-             : this.(<=) y
//-                 ? LT
//-                 : GT
//-     max :: a -> a
//-     max y =
//-         this.(<=) y
//-             ? y
//-             : x
//-     min :: a -> a
//-     min y =
//-         this.(<=) y
//-             ? x
//-             : y
//- ```
//-
//- The constants `LT`, `EQ` and `GT` are defined as
//- ```haskell
//- datatype Ordering = LT | EQ | GT
//- ```


//- Constant value for compare result.
//= LT :: Int
const LT =
    -1;


//- Constant value for compare result.
//= EQ :: Int
const EQ =
    0;


//- Constant value for compare result.
//= GT :: Int
const GT =
    1;


//- The default implementation for `(<)`.
//= Ordered a => (<) :: a -> a -> Bool
function default$LESS(other) {
    return this.$LESS$EQUAL(other) && this.$NOT$EQUAL(other);
}


//- The default implementation for `(>=)`.
//= Ordered a => (>=) :: a -> a -> Bool
function default$GREATER$EQUAL(other) {
    return this.$EQUAL$EQUAL(other) || !this.$LESS$EQUAL(other);
}


//- The default implementation for `(>)`.
//= Ordered a => (>) :: a -> a -> Bool
function default$GREATER(other) {
    return !this.$LESS$EQUAL(other);
}


//- The default implementation for `compare`.
//= Ordered a => compare :: a -> a -> Ordering
function defaultCompare(other) {
    return this.$EQUAL$EQUAL(other)
        ? EQ
        : this.$LESS$EQUAL(other)
            ? LT
            : GT;
}


//- The default implementation for `max`.
//= Ordered a => max :: a -> a -> a
function defaultMax(other) {
    return this.$LESS$EQUAL(other)
        ? other
        : this;
}


//- The default implementation for `min`.
//= Ordered a => min :: a -> a -> a
function defaultMin(other) {
    return this.$LESS$EQUAL(other)
        ? this
        : other;
}


module.exports = {
    LT,
    EQ,
    GT,
    default$LESS,
    default$GREATER$EQUAL,
    default$GREATER,
    defaultCompare,
    defaultMax,
    defaultMin
};