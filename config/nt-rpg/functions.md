###### Puts a task into a scheduled execution


```javascript
delay(function() { ... }, delay)
```


- Parameters:

    * function - code to run later
    * delay - time in milliseconds



###### Returns a list of nearby allies


```javascript
var list = nearby_allies(entity, radius)
```


- Parameters:

    * entity - allies for the entity
    * radius



###### Returns current enemy entity in crosshair


```javascript
var target = targeted_enemy(entity, range)
```


- Parameters:

    * entity - An entity which we search for its enemies
    * range - Maximal search range
    * @returns - An entity instance or null



###### Changes default value of a property. Must be called during pre initialization (within scripts folder) in order to have any affect. 


```javascript
set_property_default_value("my_property_mult", 0);
```


- Parameters:

    * string - property name
    * float - default value



###### Damaging an Entity


```javascript
damage(source, target, damage, context)
```


- Parameters:

    * source - Entity of damage origin
    * target - Entity to be damaged
    * damage - damage value
    * context - skill context
    * @returns - true if the damage was dealt



###### Damaging an Entity with specific damage type


```javascript
damage(source, target, damage, type, context)
```


- Parameters:

    * source - Entity of damage origin
    * target - Entity to be damaged
    * damage - damage value
    * type - damage type
    * context - skill context
    * @returns - true if the damage was dealt



###### Returns a float value of a skill node. 
 The returned value is a sum of initial value X and skill level * X_levelbonus nodes  


```javascript
param(node, context)
```


- Parameters:

    * node - setting string key
    * context - skill context
    * @returns - float value



###### Applies an effect to a specifc entity, each effect has different constructor parameters


```javascript
apply_effect(effect, context, source)
```


- Parameters:

    * effect - The effect to be applied
    * context - skill context
    * source - source/caster entity (may be null)



###### Sends a text message to all players on the server


```javascript
broadcast_all("&4Some colored text")
```


- Parameters:

    * 



###### Sends a text message to all players in a radius around target


```javascript
broadcast_nearby(location,radius,"&4Some colored text")
```


- Parameters:

    * location - Origin
    * radius - An integer



###### Spawns a lightning at a specific location


```javascript
spawn_lightning(location)
```


- Parameters:

    * location - Origin
    * radius - An integer



###### Heals an entity


```javascript
heal(target, amount, context)
```


- Parameters:

    * target - Entity to be healed
    * amount - Amount of HP to be healed, amount > 0
    * context - skill context



###### Returns entity location


```javascript
get_location(player_or_entity)
```


- Parameters:

    * entity - An entitz
    * @return - location object



###### Adds potion effect to the entity


```javascript
add_potion_effect(target, builder)
```


- Parameters:

    * target - An entitz
    * builder - potion effect builder



###### Converts a time to ingame interval represented in server ticks, conversion is not taking into account server lag


```javascript
to_server_ticks(100, timeunit)
```


- Parameters:

    * number - time to be converted
    * timeunit - an enum value of TimeUnit



###### Returns an instance of PotionEffectBuilder


```javascript
var builder = potion_effect_builder("potioneffectid")
```


- Parameters:




###### Converts a string to Text object.


```javascript
var text = to_text("&aColored Text")
```


- Parameters:




###### Converts a string to multiline (list) of Text objects.


```javascript
var textList = to_multiline_text("&aFirst Line:nSecondLine")
```


- Parameters:




###### Do action for every nearby enemy


```javascript
for_each_nearby_enemy(entity, radius, new Consumer() { apply: function(entity} { .. })
```


- Parameters:

    * entity - An entity which we search for its enemies
    * range - Maximal search range
    * consumer - callback



###### Returns a list of nearby allies


```javascript
for_each_nearby_ally(entity, radius, new Consumer() { apply: function(ally} { ... } )
```


- Parameters:

    * entity - allies for the entity
    * radius
    * allyEntity - callback



