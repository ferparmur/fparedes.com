---
title: 'Null coalescing (??) operator vs Elvis (?:) operator in PHP – they are different!'
pubDate: 2018-11-20
author: 'Fernando Paredes'
coverImage: '../../img/question.jpg'
coverImageAlt: 'Neon question maxwrk'
tags: [ "PHP" ]
---

A common doubt that some developers may have is differencing ?? vs ?: in PHP and other languages that support them both
like modern PHP. There is a very simple yet significant difference between them:

The Elvis operator (?:) evaluates the truth of the first term; whereas the null coalescing operator (??) evaluates if
it is not null.

We can see very easily why they are different and should not be mistaken with the help of the PHP interactive shell:

```shell
php > var_dump( false ?: 'foo' );
string(7) "foo"
php > var_dump( false ?? 'bar' );
bool(false)
```

The Elvis operator was introduced in PHP 5.3. In the release note, it was introduced as “ternary shortcut”, which is a
pretty good description of what it does.

Basically, the ?: operator is a ternary operator that leaves out the second operand (the return value if the condition
evaluates to true) from the declaration, actually using the same evaluated expression. In other words, that means that
if the first operand is true, it will return it. Otherwise, it will return the second one. Let’s see a quick example:

```php
<?php
$falseCondition = 0;
$trueCondition = 1;
$nullCondition = null;
echo $falseCondition ?: 'second'; //will output 'second'
//is the same as..
echo $falseCondition ? $falseCondition : 'second';
//which is the same as
if ( $falseCondition ) {
    echo $falseCondition;
} else {
    echo 'second';
}
echo $trueCondition ?: 'second'; //will output '1'
echo $nullCondition ?: 'second'; //will output 'second'
```

On the other hand, the null coalescing operator evaluates the if the first operand exists and is not null. If so, it
returns it; otherwise it returns its second operand.

```php
<?php
$falseCondition = 0;
$trueCondition = 1;
$nullCondition = null;
echo $falseCondition ??  'second'; //will output '0'
//is the same as..
echo isset( $falseCondition ) ? $falseCondition : 'second';
//which is the same as
if ( isset( $falseCondition ) ) {
    echo $falseCondition;
} else {
    echo 'second';
}
echo $trueCondition ?? 'second'; //will output '1'
echo $nullCondition ?? 'second'; //will output 'second'
```