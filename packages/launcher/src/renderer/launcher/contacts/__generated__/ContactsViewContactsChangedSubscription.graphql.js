/**
 * @flow
 * @relayHash 32d5e199adf84e35232c331a1a2ba40e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactsView_contacts$ref = any;
export type ContactsViewContactsChangedSubscriptionVariables = {|
  userID: string
|};
export type ContactsViewContactsChangedSubscriptionResponse = {|
  +contactsChanged: {|
    +viewer: {|
      +contacts: {|
        +$fragmentRefs: ContactsView_contacts$ref
      |}
    |}
  |}
|};
export type ContactsViewContactsChangedSubscription = {|
  variables: ContactsViewContactsChangedSubscriptionVariables,
  response: ContactsViewContactsChangedSubscriptionResponse,
|};
*/


/*
subscription ContactsViewContactsChangedSubscription(
  $userID: String!
) {
  contactsChanged {
    viewer {
      contacts {
        ...ContactsView_contacts_3iqrP
      }
      id
    }
  }
}

fragment ContactsView_contacts_3iqrP on Contacts {
  userContacts(userID: $userID) {
    ...InviteContactModal_contact
    peerID
    localID
    connectionState
    publicFeed
    invite {
      ethNetwork
      inviteTX
      stake {
        reclaimedTX
        amount
        state
      }
    }
    profile {
      name
      ethAddress
    }
    id
  }
}

fragment InviteContactModal_contact on Contact {
  peerID
  localID
  connectionState
  publicFeed
  invite {
    inviteTX
    stake {
      reclaimedTX
      amount
      state
    }
  }
  profile {
    name
    ethAddress
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "ContactsViewContactsChangedSubscription",
  "id": null,
  "text": "subscription ContactsViewContactsChangedSubscription(\n  $userID: String!\n) {\n  contactsChanged {\n    viewer {\n      contacts {\n        ...ContactsView_contacts_3iqrP\n      }\n      id\n    }\n  }\n}\n\nfragment ContactsView_contacts_3iqrP on Contacts {\n  userContacts(userID: $userID) {\n    ...InviteContactModal_contact\n    peerID\n    localID\n    connectionState\n    publicFeed\n    invite {\n      ethNetwork\n      inviteTX\n      stake {\n        reclaimedTX\n        amount\n        state\n      }\n    }\n    profile {\n      name\n      ethAddress\n    }\n    id\n  }\n}\n\nfragment InviteContactModal_contact on Contact {\n  peerID\n  localID\n  connectionState\n  publicFeed\n  invite {\n    inviteTX\n    stake {\n      reclaimedTX\n      amount\n      state\n    }\n  }\n  profile {\n    name\n    ethAddress\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactsViewContactsChangedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contactsChanged",
        "storageKey": null,
        "args": null,
        "concreteType": "ContactChangedPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contacts",
                "storageKey": null,
                "args": null,
                "concreteType": "Contacts",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ContactsView_contacts",
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "userID",
                        "variableName": "userID",
                        "type": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactsViewContactsChangedSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contactsChanged",
        "storageKey": null,
        "args": null,
        "concreteType": "ContactChangedPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "contacts",
                "storageKey": null,
                "args": null,
                "concreteType": "Contacts",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "userContacts",
                    "storageKey": null,
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "userID",
                        "variableName": "userID",
                        "type": "String!"
                      }
                    ],
                    "concreteType": "Contact",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "peerID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "localID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "connectionState",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "publicFeed",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "invite",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ContactInviteData",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "inviteTX",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "stake",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "InviteStake",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "reclaimedTX",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "amount",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "state",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "ethNetwork",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "profile",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "GenericProfile",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "ethAddress",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      v1
                    ]
                  }
                ]
              },
              v1
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59de1511c82ba2088de5e9ecfa71761a';
module.exports = node;
