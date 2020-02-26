## Functions

<dl>
<dt><a href="#genHeartbeat">genHeartbeat(data)</a> ⇒ <code>Array</code></dt>
<dd><p>Generates a valid connection heartbeat (channel 0)</p>
</dd>
<dt><a href="#genWalletUpdate">genWalletUpdate(data)</a> ⇒ <code>Array</code></dt>
<dd><p>Generates a valid wallet update packet (channel 0)</p>
</dd>
<dt><a href="#genCurrency">genCurrency()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a valid currency</p>
</dd>
<dt><a href="#genFee">genFee()</a> ⇒ <code>number</code></dt>
<dd><p>Returns a valid fee percentage</p>
</dd>
<dt><a href="#genMarketPrice">genMarketPrice()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a valid market price</p>
</dd>
<dt><a href="#genOrderID">genOrderID()</a> ⇒ <code>number</code></dt>
<dd><p>Generates a valid random order ID</p>
</dd>
<dt><a href="#genSeqNum">genSeqNum(max)</a></dt>
<dd><p>Returns a valid sequence number</p>
</dd>
<dt><a href="#genSymbol">genSymbol()</a> ⇒ <code>Object</code></dt>
<dd><p>Returns a valid symbol split into API symbol, base currency, and quote
currency</p>
</dd>
<dt><a href="#genTXAmount">genTXAmount()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a valid transaction amount</p>
</dd>
<dt><a href="#genTXDescription">genTXDescription(args)</a></dt>
<dd><p>Generates a valid wallet update description</p>
<p>TODO: Expand possibilities</p>
</dd>
<dt><a href="#genTXMarket">genTXMarket(currency)</a> ⇒ <code>string</code></dt>
<dd><p>Returns a market pair that includes the specified currency (optional,
default random)</p>
</dd>
<dt><a href="#genTXMeta">genTXMeta(data)</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>Generates a valid transaction meta field</p>
</dd>
<dt><a href="#genWalletType">genWalletType()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a valid wallet type</p>
</dd>
</dl>

<a name="genHeartbeat"></a>

## genHeartbeat(data) ⇒ <code>Array</code>
Generates a valid connection heartbeat (channel 0)

**Kind**: global function  
**Returns**: <code>Array</code> - packet  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> |  |
| data.pubSeq | <code>number</code> | public sequence number |

<a name="genWalletUpdate"></a>

## genWalletUpdate(data) ⇒ <code>Array</code>
Generates a valid wallet update packet (channel 0)

**Kind**: global function  
**Returns**: <code>Array</code> - wuPacket  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> |  |
| data.pubSeq | <code>number</code> | public sequence number |
| data.authSeq | <code>number</code> | auth sequence number |
| data.type | <code>string</code> | wallet type |
| data.currency | <code>string</code> |  |
| data.balance | <code>number</code> |  |
| data.unsettledInterest | <code>number</code> |  |
| data.balanceAvailable | <code>number</code> |  |

<a name="genCurrency"></a>

## genCurrency() ⇒ <code>string</code>
Returns a valid currency

**Kind**: global function  
**Returns**: <code>string</code> - currency  
<a name="genFee"></a>

## genFee() ⇒ <code>number</code>
Returns a valid fee percentage

**Kind**: global function  
**Returns**: <code>number</code> - feePercentage  
<a name="genMarketPrice"></a>

## genMarketPrice() ⇒ <code>string</code>
Returns a valid market price

**Kind**: global function  
**Returns**: <code>string</code> - price  
<a name="genOrderID"></a>

## genOrderID() ⇒ <code>number</code>
Generates a valid random order ID

**Kind**: global function  
**Returns**: <code>number</code> - orderID  
<a name="genSeqNum"></a>

## genSeqNum(max)
Returns a valid sequence number

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| max | <code>number</code> | <code>100</code> | upper limit, specify 0 for snapshots |

<a name="genSymbol"></a>

## genSymbol() ⇒ <code>Object</code>
Returns a valid symbol split into API symbol, base currency, and quote
currency

**Kind**: global function  
**Returns**: <code>Object</code> - symbol - { sym, base, quote }  
<a name="genTXAmount"></a>

## genTXAmount() ⇒ <code>string</code>
Returns a valid transaction amount

**Kind**: global function  
**Returns**: <code>string</code> - amount  
<a name="genTXDescription"></a>

## genTXDescription(args)
Generates a valid wallet update description

TODO: Expand possibilities

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.amount | <code>number</code> | default random |

<a name="genTXMarket"></a>

## genTXMarket(currency) ⇒ <code>string</code>
Returns a market pair that includes the specified currency (optional,
default random)

**Kind**: global function  
**Returns**: <code>string</code> - symbol  

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | default random |

<a name="genTXMeta"></a>

## genTXMeta(data) ⇒ <code>Object</code> \| <code>null</code>
Generates a valid transaction meta field

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>null</code> - meta - may be null  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | optional, default random |
| data.reason | <code>string</code> |  |
| data.orderID | <code>number</code> |  |
| data.orderIDOpponent | <code>number</code> |  |
| data.tradePrice | <code>string</code> |  |
| data.tradeAmount | <code>string</code> |  |

<a name="genWalletType"></a>

## genWalletType() ⇒ <code>string</code>
Returns a valid wallet type

**Kind**: global function  
**Returns**: <code>string</code> - walletType  
