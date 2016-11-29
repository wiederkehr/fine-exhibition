import React from 'react';
import './Profile.css';

export const ProfileBanner = () => (
  <div className="ProfileBanner">
    <ProfileAvatar url='assets/images/profileavatar_annawiederkehr.jpg'/>
    <ProfileName>Anna Wiederkehr</ProfileName>
    <ProfileStatus>Recording emotion since 139 days.</ProfileStatus>
  </div>
);

export const ProfileAvatar = ({ url }) => (
  <div className="ProfileAvatar">
    <img src={url} role="presentation" />
  </div>
);

export const ProfileName = ({ children }) => (
  <div className="ProfileName">{ children }</div>
);

export const ProfileStatus = ({ children }) => (
  <div className="ProfileStatus">{ children }</div>
);

export const ProfileCallout = () => (
  <div className="ProfileCallout">
    <ProfileCalloutLabel>Dominant emotion in last 30 days</ProfileCalloutLabel>
    <ProfileCalloutValue>Fuchsing</ProfileCalloutValue>
  </div>
);

export const ProfileCalloutLabel = ({ children }) => (
  <div className="ProfileCalloutLabel">{ children }</div>
);

export const ProfileCalloutValue = ({ children }) => (
  <div className="ProfileCalloutValue">{ children }</div>
);

export const ProfileListItem = ({ emotion, adjective, most, least }) => (
  <div className="ProfileListItem">
    <ProfileListItemTitel>{ emotion }</ProfileListItemTitel>
    <ProfileListItemValues adjective={adjective} most={most} least={least} />
  </div>
);

export const ProfileListItemValues = ({ adjective, most, least }) => (
  <div className='ProfileListItemValues'>
    <ItemKeyValuePair lable='Most' adjective={adjective} value={most} />
    <ItemKeyValuePair lable='Least' adjective={adjective} value={least} />
  </div>
);

export const ItemKeyValuePair = ({ lable, adjective, value }) => (
  <div className='ItemKeyValuePair'>
    <ProfileListItemLabel>{ lable + ' ' + adjective }</ProfileListItemLabel>
    <ProfileListItemValue>{ value }</ProfileListItemValue>
  </div>
);

export const ProfileListItemTitel = ({ children }) => (
  <div className="ProfileListItemTitel">{ children }</div>
);

export const ProfileListItemLabel = ({ children }) => (
  <div className="ProfileListItemLabel">{ children }</div>
);

export const ProfileListItemValue = ({ children }) => (
  <div className="ProfileListItemValue">{ children }</div>
);
