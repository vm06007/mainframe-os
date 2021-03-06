// @flow

import { type hexValue } from '@erebos/hex'

import Identity from './Identity'

type FeedHash = string

export type PeerUserProfile = {
  name?: ?string,
  avatar?: ?string,
  ethAddress?: ?string,
}

export type PublicFeedSerialized = {
  publicKey: string,
  profile?: PeerUserProfile,
  firstContactAddress: hexValue,
}

export type Feeds = { [type: string]: FeedHash }

export type PeerUserIdentitySerialized = {
  id: string,
  localID: string,
  publicFeed: FeedHash,
  firstContactAddress: hexValue,
  otherFeeds: Feeds,
  profile: PeerUserProfile,
}

export type PeerUserIdentityParams = PeerUserIdentitySerialized

export default class PeerUserIdentity extends Identity {
  static fromJSON = (params: PeerUserIdentitySerialized): PeerUserIdentity => {
    return new PeerUserIdentity(
      params.localID,
      params.id,
      params.profile,
      params.publicFeed,
      params.firstContactAddress,
      params.otherFeeds,
    )
  }

  static toJSON = (peer: PeerUserIdentity): PeerUserIdentitySerialized => ({
    id: peer.id,
    localID: peer.localID,
    publicFeed: peer.publicFeed,
    firstContactAddress: peer.firstContactAddress,
    otherFeeds: peer.otherFeeds,
    profile: peer.profile,
  })

  _publicFeed: FeedHash
  _firstContactAddress: hexValue
  _otherFeeds: Feeds
  _profile: PeerUserProfile

  constructor(
    localID: string,
    keyOrId: string | Buffer,
    profile: PeerUserProfile,
    publicFeed: FeedHash,
    firstContactAddress: hexValue,
    otherFeeds?: Feeds,
  ) {
    super(localID, 'user', keyOrId)
    this._publicFeed = publicFeed
    this._firstContactAddress = firstContactAddress
    this._otherFeeds = otherFeeds || {}
    this._profile = profile
  }

  get publicFeed(): FeedHash {
    return this._publicFeed
  }

  get profile(): PeerUserProfile {
    return this._profile
  }

  get firstContactAddress(): hexValue {
    return this._firstContactAddress
  }

  get otherFeeds(): Feeds {
    return this._otherFeeds
  }

  get name(): ?string {
    return this._profile.name
  }

  get avatar(): ?string {
    return this._profile.avatar
  }

  set profile(profile: PeerUserProfile = {}) {
    this._profile = profile
  }
}
