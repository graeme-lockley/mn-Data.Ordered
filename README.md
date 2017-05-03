
The `Ordered` is used to define totally ordered data-types.

```haskell
interface Ordering a: Parity a
    (<=) :: a -> Bool
    (<) :: a -> Bool
    (<) y =
        this.(<=) y && this.(!=) y
    (>=) :: a -> Bool
    (>=) y =
        this.(==) y || ! (this.(<=) y)
    (>) :: a -> Bool
    (>) y =
        ! (this.(<=) y)
    compare :: a -> Ordering
    compare y =
        this.(==)(y)
            ? EQ
            : this.(<=) y
                ? LT
                : GT
    max :: a -> a
    max y =
        this.(<=) y
            ? y
            : x
    min :: a -> a
    min y =
        this.(<=) y
            ? x
            : y
```

The constants `LT`, `EQ` and `GT` are defined as
```haskell
datatype Ordering = LT | EQ | GT
```

### LT

```haskell
LT :: Int
```

Constant value for compare result.

### EQ

```haskell
EQ :: Int
```

Constant value for compare result.

### GT

```haskell
GT :: Int
```

Constant value for compare result.

### (<)

```haskell
Ordered a => (<) :: a -> a -> Bool
```

The default implementation for `(<)`.

### (>=)

```haskell
Ordered a => (>=) :: a -> a -> Bool
```

The default implementation for `(>=)`.

### (>)

```haskell
Ordered a => (>) :: a -> a -> Bool
```

The default implementation for `(>)`.

### compare

```haskell
Ordered a => compare :: a -> a -> Ordering
```

The default implementation for `compare`.

### max

```haskell
Ordered a => max :: a -> a -> a
```

The default implementation for `max`.

### min

```haskell
Ordered a => min :: a -> a -> a
```

The default implementation for `min`.

