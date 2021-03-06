'use strict'

import test from 'tape'
import Immutable from 'immutable'
import { JSONLDNode
       , JSONLDValue
       , fromJSONLD
       , fromExpandedJSONLD
       } from '../ImmutableJSONLD'

import person from '../../test/data/person-expanded.json'
import event from '../../test/data/event-expanded.json'
import place from '../../test/data/place-expanded.json'
import product from '../../test/data/product-expanded.json'
import recipe from '../../test/data/recipe-expanded.json'
import library from '../../test/data/library-expanded.json'
import activity from '../../test/data/activity-expanded.json'
import stupid from '../../test/data/stupid.json'
import stupid_expanded from '../../test/data/stupid-expanded.json'
import reverse from '../../test/data/reverse.json'
import reverse_expanded from '../../test/data/reverse-expanded.json'
import list from '../../test/data/list.json'
import list_expanded from '../../test/data/list-expanded.json'
import set from '../../test/data/set.json'
import set_expanded from '../../test/data/set-expanded.json'

test('test fromExpandedJSONLD()', t => {
  const nodes = fromExpandedJSONLD()
  t.plan(3)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.ok(nodes.isEmpty(), 'is empty')
  t.equal(nodes.size, 0, 'size is 0')
})

test('test fromExpandedJSONLD(null)', t => {
  const nodes = fromExpandedJSONLD(null)
  t.plan(3)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.ok(nodes.isEmpty(), 'is empty')
  t.equal(nodes.size, 0, 'size is 0')
})

test('test fromExpandedJSONLD([])', t => {
  const nodes = fromExpandedJSONLD([])
  t.plan(3)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.ok(nodes.isEmpty(), 'is empty')
  t.equal(nodes.size, 0, 'size is 0')
})

test('test fromExpandedJSONLD(Immutable.List)', t => {
  const nodes = fromExpandedJSONLD(Immutable.List())
  t.plan(3)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.ok(nodes.isEmpty(), 'is empty')
  t.equal(nodes.size, 0, 'size is 0')
})

test('test fromExpandedJSONLD({})', t => {
  const nodes = fromExpandedJSONLD({})
  t.plan(4)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.ok(nodes.first() instanceof JSONLDNode, 'contains a JSONLDNode')
  t.ok(nodes.first().isEmpty(), 'contains an empty JSONLDNode')
})

test('test fromExpandedJSONLD(Immutable.Map)', t => {
  const nodes = fromExpandedJSONLD(Immutable.Map())
  t.plan(4)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.ok(nodes.first() instanceof JSONLDNode, 'contains a JSONLDNode')
  t.ok(nodes.first().isEmpty(), 'contains an empty JSONLDNode')
})

test('test fromExpandedJSONLD(person)', t => {
  const nodes = fromExpandedJSONLD(person)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), person, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 5, 'with 5 entries')
})

test('test fromExpandedJSONLD(event)', t => {
  const nodes = fromExpandedJSONLD(event)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), event, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 3, 'with 3 entries')
})

test('test fromExpandedJSONLD(place)', t => {
  const nodes = fromExpandedJSONLD(place)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), place, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 4, 'with 4 entries')
})

test('test fromExpandedJSONLD(product)', t => {
  const nodes = fromExpandedJSONLD(product)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), product, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 8, 'with 8 entries')
})

test('test fromExpandedJSONLD(recipe)', t => {
  const nodes = fromExpandedJSONLD(recipe)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), recipe, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 4, 'with 4 entries')
})

test('test fromExpandedJSONLD(library)', t => {
  const nodes = fromExpandedJSONLD(library)
  t.plan(4)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 3, 'size is 3')
  t.deepEqual(nodes.toJS(), library, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
})

test('test fromExpandedJSONLD(activity)', t => {
  const nodes = fromExpandedJSONLD(activity)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), activity, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 4, 'with 4 entries')
})

test('test fromExpandedJSONLD(stupid)', t => {
  const nodes = fromExpandedJSONLD(stupid_expanded)
  t.plan(5)
  t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
  t.equal(nodes.size, 1, 'size is 1')
  t.deepEqual(nodes.toJS(), stupid_expanded, 'round-trips OK')

  let node = nodes.first()
  t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
  t.equal(node.size, 2, 'with 2 entries')
})

test('test fromJSONLD(stupid)', t => {
  fromJSONLD(stupid)
    .then(
      nodes => {
        t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
        t.equal(nodes.size, 1, 'size is 1')
        t.deepEqual(nodes.toJS(), stupid_expanded, 'round-trips OK')
        let node = nodes.first()
        t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
        t.equal(node.size, 2, 'with 2 entries')
        t.end()
      })
    .catch(err => t.end(err))
})

test('test fromJSONLD(url)', t => {
  fromJSONLD('https://gist.githubusercontent.com/rybesh/'
    + '3cbacf6cbc539b7c22f7/raw/2c15ecbd3e878dd40523fa1ad8c70f004a1bb193/'
    + 'stupid.json')
    .then(
      nodes => {
        t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
        t.equal(nodes.size, 1, 'size is 1')
        t.deepEqual(nodes.toJS(), stupid_expanded, 'round-trips OK')
        let node = nodes.first()
        t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
        t.equal(node.size, 2, 'with 2 entries')
        t.end()
      })
    .catch(err => t.end(err))
})

test('test @reverse handling', t => {
  fromJSONLD(reverse)
    .then(
      nodes => {
        t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
        t.equal(nodes.size, 1, 'size is 1')
        t.deepEqual(nodes.toJS(), reverse_expanded, 'round-trips OK')
        let node = nodes.first()
        t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
        t.equal(node.size, 3, 'with 3 entries')
        let atreverse = node.get('@reverse')
        t.ok(atreverse instanceof JSONLDNode, '@reverse is a JSONLDNode')
        t.equal(atreverse.size, 1, 'with 1 entry')
        t.end()
      })
    .catch(err => t.end(err))
})

test('test @list handling', t => {
  fromJSONLD(list)
    .then(
      nodes => {
        t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
        t.equal(nodes.size, 1, 'size is 1')
        t.deepEqual(nodes.toJS(), list_expanded, 'round-trips OK')
        let node = nodes.first()
        t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
        t.equal(node.size, 2, 'with 2 entries')
        let values = node.get('http://xmlns.com/foaf/0.1/nick')
        t.ok(values instanceof Immutable.List, 'is Immutable.List')
        let map = values.first()
        t.ok(map instanceof Immutable.Map, 'is Immutable.Map')
        t.false(JSONLDNode.isJSONLDNode(map), 'is not a JSONLDNode')
        let list = map.get('@list')
        t.ok(list instanceof Immutable.List, 'is Immutable.List')
        t.end()
      })
    .catch(err => t.end(err))
})

test('test @set handling', t => {
  fromJSONLD(set)
    .then(
      nodes => {
        t.ok(nodes instanceof Immutable.List, 'is Immutable.List')
        t.equal(nodes.size, 1, 'size is 1')
        t.deepEqual(nodes.toJS(), set_expanded, 'round-trips OK')
        let node = nodes.first()
        t.ok(node instanceof JSONLDNode, 'contains a JSONLDNode')
        t.equal(node.size, 2, 'with 2 entries')
        let values = node.get('http://xmlns.com/foaf/0.1/nick')
        t.ok(values instanceof Immutable.List, 'is Immutable.List')
        let value = values.first()
        t.ok(value instanceof JSONLDValue, 'is JSONLDValue')
        t.end()
      })
    .catch(err => t.end(err))
})
