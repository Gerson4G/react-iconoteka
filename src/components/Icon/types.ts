export type IconProps = {
  name: IconName;
  className?: string;
  stroke: 'light' | 'regular' | 'medium' | 'bold';
  type: 'fill' | 'line';
  height?: number;
  width?: number;
  color?: string;
};

export default IconName;

export type IconName =
  | 'Svg3DRotation'
  | 'Svg5CirclesGroupSupplies'
  | 'AddDocument'
  | 'AddNote'
  | 'AddToClipboard'
  | 'Airfare'
  | 'AirMattress'
  | 'AirplaneModeFAirport'
  | 'AirplaneModeOff'
  | 'Airplay'
  | 'AlarmAdd'
  | 'AlarmOff'
  | 'AlarmOn'
  | 'AlarmSnooze'
  | 'AlertAdd'
  | 'AlertError'
  | 'ALetter'
  | 'AlighHorizontalCenter'
  | 'AlighVerticalCenter'
  | 'AlignBottom'
  | 'AlignLeft'
  | 'AlignRight'
  | 'AlignTop'
  | 'AllInboxes'
  | 'AllInclusiveInfinity'
  | 'AllOut'
  | 'AmericanFootballBall'
  | 'AmericanFootballHelmet'
  | 'AngryOnyx'
  | 'Application'
  | 'ApplicationsApps'
  | 'ApplicationSettingsOptions'
  | 'Archive'
  | 'Archives'
  | 'ArrowDown'
  | 'ArrowInCircleDown'
  | 'ArrowInCircleLeft'
  | 'ArrowInCircleLeftDown'
  | 'ArrowInCircleLeftUp'
  | 'ArrowInCircleRight'
  | 'ArrowInCircleRightDown'
  | 'ArrowInCircleRightUp'
  | 'ArrowInCircleUp'
  | 'ArrowLeft'
  | 'ArrowLeftDown'
  | 'ArrowLeftUp'
  | 'ArrowRightDown'
  | 'ArrowRightForward'
  | 'ArrowRightUpOpenInNewApple'
  | 'ArrowThinDown'
  | 'ArrowThinLeftBackspace'
  | 'ArrowThinLeftDown'
  | 'ArrowThinLeftUp'
  | 'ArrowThinRight'
  | 'ArrowThinRightDown'
  | 'ArrowThinRightUp'
  | 'ArrowThinUp'
  | 'ArrowUp'
  | 'ArtTrack'
  | 'AspectRatio'
  | 'Assignment'
  | 'AssignmentLate'
  | 'AssignmentOn'
  | 'AssignmentReturn'
  | 'AssignmentReturned'
  | 'Atheism'
  | 'AtmAutomatedTellerMachine'
  | 'AtmCard'
  | 'AtmCash'
  | 'AtmCashDeposit'
  | 'AtmCashWithdrawal'
  | 'BabyCarriageBuggyStrollerChildFriendly'
  | 'BackspaceAlt'
  | 'BackupRestore'
  | 'BagBaggageLuggage'
  | 'BaggageClaim'
  | 'BankAccount'
  | 'BankBuildingUsd'
  | 'BankCardCreditDebit'
  | 'BarbershopHaircutHairdressingSalon'
  | 'BarChair'
  | 'BasketballBall'
  | 'Battery0Empty'
  | 'Battery100Full'
  | 'Battery25'
  | 'Battery50'
  | 'Battery75'
  | 'BatteryAlert'
  | 'Battery'
  | 'BatteryCharging0Empty'
  | 'BatteryCharging100Full'
  | 'BatteryCharging25'
  | 'BatteryCharging50'
  | 'BatteryCharging75'
  | 'BatteryCharging'
  | 'BatteryUnknown'
  | 'BeachVacationUmbrella'
  | 'Bicycle'
  | 'BLetter'
  | 'BlockNotInterestedProhibited'
  | 'BluetoothAudio'
  | 'Bluetooth'
  | 'BluetoothOff'
  | 'BluetoothOn'
  | 'BluetoothSettings'
  | 'BluetoothSignal'
  | 'BookCover'
  | 'Bookmark'
  | 'BorderAll'
  | 'BorderBottom'
  | 'BorderCenterHorizontal'
  | 'BorderCenterVertical'
  | 'BorderClear'
  | 'BorderInner'
  | 'BorderLeft'
  | 'BorderOuter'
  | 'BorderRight'
  | 'BorderStyle'
  | 'BorderTop'
  | 'BoxAdd'
  | 'BoxClose'
  | 'BoxDelete'
  | 'BoxingGloveBox'
  | 'BrandingWatermark'
  | 'BrightnessLow'
  | 'Brightness'
  | 'BrigtnessAuto'
  | 'BroadcastTv'
  | 'BrowserIeInternetExplorerFirefoxSafariOpera'
  | 'Buddhism'
  | 'BugReport'
  | 'BunkBed'
  | 'Button'
  | 'ButtonWithText'
  | 'CakeBirthday'
  | 'Calendar'
  | 'CallMissed'
  | 'CallMissedOutgoing'
  | 'CallToActionCtaButton'
  | 'CameraDsrlLocalSeePhotoShoot'
  | 'CamerasPhotoFearPartyMode'
  | 'CameraVideoMovie'
  | 'CameraVideoOff'
  | 'Can'
  | 'CancelClearCloseCircleDeleteTextHighlightOff'
  | 'Capslock'
  | 'CapsuleHotel'
  | 'CartonBoxCardboard'
  | 'CashMoney'
  | 'CastConnected'
  | 'CastDisabled'
  | 'CellPhoneFlip'
  | 'CellPhoneSlider'
  | 'CellPhoneWithKeyboardOldPhone'
  | 'CellPhoneWithQwertyKeyboard'
  | 'CelularOff'
  | 'ChairClassic'
  | 'ChairModern'
  | 'ChairModernCrossStruts'
  | 'CharityDonations'
  | 'ChartAssessment'
  | 'ChartBarInvestmentEqualizerGraphicEq'
  | 'ChartBubble'
  | 'ChartInvestment'
  | 'ChartMultiple'
  | 'ChartPieDataUsageCircularDiagram'
  | 'ChatQuestionAnswer'
  | 'CheckAllDoneAllDoubleCheckTickAll'
  | 'CheckboxChecked'
  | 'CheckBoxIndeterminate'
  | 'CheckboxUnchecked'
  | 'CheckChecking'
  | 'CheckedCheckCircle'
  | 'CheckmarkDoneCheckTick'
  | 'ChevronDownKeyboardArrowDown'
  | 'ChevronInCircleDownDropDown'
  | 'ChevronInCircleLeft'
  | 'ChevronInCircleLeftDown'
  | 'ChevronInCircleLeftUp'
  | 'ChevronInCircleRight'
  | 'ChevronInCircleRightDown'
  | 'ChevronInCircleRightUp'
  | 'ChevronInCircleUp'
  | 'ChevronLeftDown'
  | 'ChevronLeftKeyboardArrowLeft'
  | 'ChevronLeftUp'
  | 'ChevronRightDown'
  | 'ChevronRightKeyboardArrowRight'
  | 'ChevronRightUp'
  | 'ChevronSmallDownDropDownExpandMore'
  | 'ChevronSmallLeft'
  | 'ChevronSmallLeftDown'
  | 'ChevronSmallLeftUp'
  | 'ChevronSmallRight'
  | 'ChevronSmallRightDown'
  | 'ChevronSmallRightUp'
  | 'ChevronSmallUpExpandLess'
  | 'ChevronUpKeyboardArrowUp'
  | 'Christianity'
  | 'CircleFullMoon'
  | 'CircleMoonFull'
  | 'City'
  | 'CLetter'
  | 'ClipboardPaste'
  | 'ClockAlarm'
  | 'ClockTimeWatchLater'
  | 'CloseAllClear'
  | 'ClosedCaption'
  | 'CloseDeleteCrossClear'
  | 'CloudCloudy'
  | 'CloudDownloadBackup'
  | 'CloudOff'
  | 'CloudQueue'
  | 'CloudSync'
  | 'CloudSynced'
  | 'CloudUpload'
  | 'CocktailBarDrink'
  | 'Code'
  | 'CollegeSchoolEducation'
  | 'CompactCamera'
  | 'CompassExplore'
  | 'ComputerTable'
  | 'ConfirmationNumber'
  | 'ControllerRemoteWireless'
  | 'ControlPointDuplicate'
  | 'CoordinatesGpsLocationNotFixed'
  | 'CoordinatesOffLocationOffGpsOff'
  | 'Copy'
  | 'Copyright'
  | 'Cosmetics'
  | 'CouchSofaWeekend'
  | 'CourseCourses'
  | 'CreateNewFolder'
  | 'CreditCard'
  | 'Crib'
  | 'Cricket'
  | 'Crop16X9'
  | 'Crop3X2'
  | 'Crop5X4'
  | 'Crop7X5'
  | 'CropFree'
  | 'Crop_&Rotate'
  | 'CropVertical'
  | 'CupCoffeeTeaCafeCaffeeTeahouse'
  | 'CupPrizeCompetitions'
  | 'DashboardViewDashboard'
  | 'DateRange'
  | 'DebitCard'
  | 'Decagon'
  | 'DeleteForever'
  | 'DeleteSweep'
  | 'DesktopMac'
  | 'DesktopWindows'
  | 'DeviceInformation'
  | 'DeviceSettings'
  | 'DiamondRedDiamond'
  | 'DiceCasino'
  | 'Dining'
  | 'DiskAlertFull'
  | 'DiskCompactCd'
  | 'DizzySentimentVeryDissatisfied'
  | 'DLetter'
  | 'DockStation'
  | 'DocumentBackup'
  | 'DocumentDiagramPoll'
  | 'DocumentNewEmpty'
  | 'DocumentTable'
  | 'DocumentTextDescription'
  | 'Domain'
  | 'DonutDiagram'
  | 'DoubleBedBedroom'
  | 'DownloadGetApp'
  | 'Drooling'
  | 'DropHumidity'
  | 'DropPinLocationPlace'
  | 'DropWaterHumidity'
  | 'EarthAmericaPlanet'
  | 'EarthAustraliaPlanet'
  | 'EarthEurasiaAfricaPlanet'
  | 'EarthPlanet'
  | 'EasternChristianity'
  | 'Eject'
  | 'EjectCircle'
  | 'ELetter'
  | 'EnergyElectricity'
  | 'EnhancedEncryption'
  | 'EnterEntranceExitToApp'
  | 'ESimEmbeddedMff2'
  | 'Ethernet'
  | 'Euro'
  | 'EvChargingStation'
  | 'EventAvailable'
  | 'EventBusy'
  | 'EventNote'
  | 'Exit'
  | 'ExpensesOutcomePayment'
  | 'ExplicitContentFuckCuntShit'
  | 'FaceChildChildCareBabysitter'
  | 'FastForward'
  | 'FastForwardCircle'
  | 'FastRewind'
  | 'FastRewindCircle'
  | 'FeaturedPlaylist'
  | 'FeaturedVideo'
  | 'FiberDvr'
  | 'FiberSmartRecord'
  | 'FilmRollMovieMovies'
  | 'FindReplace'
  | 'FireHot'
  | 'First'
  | 'FitnessCenterGymSportDumbbell'
  | 'Flag'
  | 'FLetter'
  | 'FlipToBack'
  | 'FlipToFront'
  | 'FloorMattress'
  | 'FloppyDiskSaveDisketteDisk'
  | 'FogHaze'
  | 'Fold'
  | 'Folder'
  | 'FolderFavorite'
  | 'FolderMedia'
  | 'FolderOpened'
  | 'FolderPersonal'
  | 'FolderShared'
  | 'FontFile'
  | 'FontFileDownload'
  | 'FoodDiningRestaurant'
  | 'FootballBallSoccerBall'
  | 'FreehandGesture'
  | 'Fridge'
  | 'FrowningDissatisfiedSentimentVeryDissatisfied'
  | 'FrowningMoodBad'
  | 'Fullscreen'
  | 'FullscreenExit'
  | 'GamepadJoystickController'
  | 'GamepadWireJoystickController'
  | 'GamepadWirelessJoystickController'
  | 'Games'
  | 'GasStation'
  | 'GearSettingsMaintenance'
  | 'GifGraphicsInterchangeFormat'
  | 'GiftCardRedeem'
  | 'GiftPresentCharity'
  | 'GlassOfSparklingWater'
  | 'GlassOfWaterDrinkHydration'
  | 'GlassRecycledBottle'
  | 'GLetter'
  | 'Golf'
  | 'GrimmingMoodGoodSentimentSatisfied'
  | 'GrinSentimentVerySatisfiedGrinningFaceWithSmilingEyes'
  | 'GroupPeopleCommunity'
  | 'HailHeavy'
  | 'HailLow'
  | 'Hail'
  | 'HalfCircleLeftMoonLastQuarter'
  | 'HalfCircleRightMoonFirstQuarter'
  | 'Hallway'
  | 'Hammock'
  | 'HdHighDefinition'
  | 'HeadsetHeadphonesListenAudioAudition'
  | 'HeadsetWithMicrophoneHeadphonesVoiceChat'
  | 'HeartLikeLoveFavoriteDida'
  | 'HelpQuestionFaq'
  | 'HeptagonSeptagon'
  | 'Hexagon'
  | 'HideKeyboard'
  | 'HighPriority'
  | 'Hinduism'
  | 'History'
  | 'HistoryClock'
  | 'HLetter'
  | 'HospitalRedCrossHealthDoctor'
  | 'Hostel'
  | 'Hotel'
  | 'Hourglass'
  | 'HourglassFinish'
  | 'HourglassStart'
  | 'HouseHomeHousing'
  | 'HqHighQuality'
  | 'Http'
  | 'IceCream'
  | 'IceHockey'
  | 'ILetter'
  | 'Inbox'
  | 'Income'
  | 'IndentDecrease'
  | 'IndentIncrease'
  | 'index'
  | 'InfoItalicMoreDetailsInformationAbout'
  | 'InfoMonospacedMoreDetailsInformationAbout'
  | 'InfoSansSerifMoreDetailsInformationAbout'
  | 'Input'
  | 'InvertColors'
  | 'Ir'
  | 'Islam'
  | 'JLetter'
  | 'Judaism'
  | 'Keyboard'
  | 'KeyboardWire'
  | 'KeyboardWireless'
  | 'KeyRentRentals'
  | 'KingSizeBed'
  | 'Kitchen'
  | 'Kite'
  | 'KLetter'
  | 'Label'
  | 'LaptopComputerNotebookMacbook'
  | 'Last'
  | 'Laundry'
  | 'Layers'
  | 'LayersOff'
  | 'LibraryAdd'
  | 'Library'
  | 'LibraryBuilding'
  | 'LibraryList'
  | 'LibraryMusic'
  | 'LibraryVideo'
  | 'ningFlash'
  | 'ningFlashElectricity'
  | 'Spacing'
  | 'Style'
  | 'Weight'
  | 'LinkChain'
  | 'ListBulletedViewList'
  | 'ListPlaylistQueue'
  | 'LLetter'
  | 'LoanCashBorrow'
  | 'LoanRentBorrow'
  | 'LocationAdd'
  | 'LocationAlert'
  | 'LocationEdit'
  | 'LocationOff'
  | 'LocationOnBeenhere'
  | 'LocationPlace'
  | 'LocationRemove'
  | 'LocationUser'
  | 'LockEncryptionSecurity'
  | 'LockOpenUnlock'
  | 'LoopCachedSync'
  | 'LowPriority'
  | 'Loyalty'
  | 'Mailbox'
  | 'MailEnvelope'
  | 'MailReadDraft'
  | 'Map'
  | 'MedalPrizeCompetition'
  | 'MedicalInsuranceHealth'
  | 'MembershipCard'
  | 'Menu'
  | 'MenuHamburger'
  | 'Merge'
  | 'Message'
  | 'MessageFailed'
  | 'MessageListSpeakerNotes'
  | 'MicrophoneConcertsSing'
  | 'MicrophoneOffAltVoiceOff'
  | 'MicrophoneOffVoiceOff'
  | 'MicrophoneVoiceSpeechDictation'
  | 'MicroSdCard'
  | 'MicroSimCard'
  | 'MiniSdCard'
  | 'MinusDeleteRemove'
  | 'MinusInCircleDoNotDisturbOnRemove'
  | 'Mist'
  | 'MLetter'
  | 'Mms'
  | 'MoonWaningCrescentRedCrescent'
  | 'MoonWaningGibbous'
  | 'MoonWaxingCrescent'
  | 'MoonWaxingGibbous'
  | 'More'
  | 'MoreInCircleUncategorized'
  | 'MoreVertical'
  | 'Mortgage'
  | 'Mouse'
  | 'MouseClassic'
  | 'MouseWire'
  | 'MouseWireless'
  | 'MoveToInbox'
  | 'MusicVideo'
  | 'MyLocationCoordinatesLocationOnGpsFixed'
  | 'NanoSimCard'
  | 'Navigation'
  | 'NearMe'
  | 'NetworkCellLock'
  | 'NetworkCellSignalCellular1'
  | 'NetworkCellSignalCellular2'
  | 'NetworkCellSignalCellular3'
  | 'NetworkCellSignalCellular4'
  | 'NetworkCheck'
  | 'NetworkSettingsMobileDataSettings'
  | 'NeutralSentimentNeutral'
  | 'New'
  | 'NewReleases'
  | 'Nirvana'
  | 'NLetter'
  | 'NoEncryption'
  | 'NoEnergyNoPowerNoBattery'
  | 'NoMessageSpeakerNotesOff'
  | 'NoMouth'
  | 'NonagonEnneagon'
  | 'NoSimCard'
  | 'Note'
  | 'NoteEdit'
  | 'NotificationBellAlert'
  | 'NotificationOff'
  | 'NotificationPaused'
  | 'Octagon'
  | 'OfferTagPrice'
  | 'OfficeChair'
  | 'OldTv'
  | 'OLetter'
  | 'OnDemandTv'
  | 'OnDemandVideo'
  | 'Opacity'
  | 'OpenInBrowser'
  | 'OpenInNewAndroidLaunch'
  | 'OpenWith'
  | 'OvalHorizontal'
  | 'OvalVertical'
  | 'Overscan'
  | 'PaperClipAttachment'
  | 'Parallelogram'
  | 'PartlyCloudy'
  | 'Pause'
  | 'PauseCircle'
  | 'PawPetsAnimalsPet'
  | 'PencilEditCreate'
  | 'PentagonPentagram'
  | 'PermissionCameraMicrophone'
  | 'PersonalAssignment'
  | 'PersonalCalendarContactCalendar'
  | 'PharmacyDrugStores'
  | 'PhoneCall'
  | 'PhoneForwarded'
  | 'PhoneInTalk'
  | 'PhoneLocked'
  | 'PhoneMessage'
  | 'PhoneMissed'
  | 'PhonePaused'
  | 'PhoneSettings'
  | 'PhotoImageWallpaper'
  | 'PictureDecoration'
  | 'PictureInPictureAlt'
  | 'PictureInPicture'
  | 'Pin'
  | 'PinText'
  | 'PizzaSlice'
  | 'PlaceFavorite'
  | 'PlanetEarthInternetPublic'
  | 'PlasticBottleRecycling'
  | 'PlasticHdpe'
  | 'PlasticLdpe'
  | 'PlasticOther'
  | 'PlasticPet'
  | 'PlasticPp'
  | 'PlasticPs'
  | 'PlasticPvc'
  | 'PlayCircle'
  | 'PlaylistAddAddToQueue'
  | 'PlaylistCheck'
  | 'PlaylistPlayQueueMusic'
  | 'PlaylistRemoveRemoveFromQueue'
  | 'PlayStart'
  | 'PLetterParking'
  | 'PlusAddCreate'
  | 'PlusInCircleAddCreate'
  | 'PointAndShootCamera'
  | 'Pool'
  | 'PotCooking'
  | 'PowerConnecotFork'
  | 'PowerInput'
  | 'PowerOnOffButton'
  | 'PowerSettings'
  | 'PowerSocketB'
  | 'PowerSocket'
  | 'PowerSocketC'
  | 'PowerSocketD'
  | 'PowerSocketE'
  | 'PowerSocketF'
  | 'PowerSocketG'
  | 'PowerSocketH'
  | 'PowerSocketI'
  | 'PowerSocketJ'
  | 'PowerSocketK'
  | 'PowerSocketL'
  | 'PowerSocketM'
  | 'PowerSocketN'
  | 'PowerSocketO'
  | 'PrepaidCard'
  | 'PrinterPrintPrintshop'
  | 'ProgramSoftware'
  | 'Publish'
  | 'PuzzleExtension'
  | 'QLetter'
  | 'QueenSizeBed'
  | 'RadioButtonOff'
  | 'RadioButtonOn'
  | 'RadioVintageStationReciever'
  | 'RainHeavy'
  | 'Rain'
  | 'RateReview'
  | 'RatingsStars'
  | 'ReaderMode'
  | 'Recycling'
  | 'Redo'
  | 'Reorder'
  | 'Repeat'
  | 'Replay'
  | 'ReplyAll'
  | 'Reply'
  | 'Report'
  | 'Restore'
  | 'Return'
  | 'Rhombus'
  | 'RLetter'
  | 'RockingChair'
  | 'RoomService'
  | 'RotateCcw'
  | 'RotateCw'
  | 'RoundedCorner'
  | 'RouteDirections'
  | 'Router'
  | 'RugbyBall'
  | 'RussianRoubleRur'
  | 'Satanism'
  | 'Savings'
  | 'ScalesJudgeJusticeCourthouse'
  | 'ScannerScan'
  | 'Schedule'
  | 'ScheduledVideo'
  | 'Scientology'
  | 'ScissorsCut'
  | 'ScreenLockLandscape'
  | 'ScreenLockPortrait'
  | 'ScreenLockRotation'
  | 'ScreenRotation'
  | 'SdCard'
  | 'SearchEdit'
  | 'SearchHistorySearchedFor'
  | 'SearchMagnifyingGlassHandLens'
  | 'SearchOff'
  | 'SearchOn'
  | 'SearchOnPage'
  | 'SearchPersonUser'
  | 'SecurityOff'
  | 'SecurityOnSecuredVerified'
  | 'Send'
  | 'ServerDnsServer'
  | 'ShareApple'
  | 'ShareGoogle'
  | 'ShareMicrosoft'
  | 'ShieldSecurityInsurance'
  | 'ShoppingBagMallShopStore'
  | 'ShoppingBasket'
  | 'ShoppingCartGroceryStore'
  | 'ShowHeavy'
  | 'ShowToAll'
  | 'Shuffle'
  | 'SignalCellularAlert1'
  | 'SignalCellularAlert2'
  | 'SignalCellularAlert3'
  | 'SignalCellularAlert4'
  | 'SignalWifiOff'
  | 'SimCard'
  | 'SingleBed'
  | 'SkipCircle'
  | 'SkipNext'
  | 'SkipPrevious'
  | 'SkipPreviousCircle'
  | 'Sleet'
  | 'SLetter'
  | 'SlyFrowningSadSentimentDissatisfied'
  | 'SlowMotionVideo'
  | 'SmartbandActivityTracker'
  | 'SmartphoneAndroid'
  | 'SmartphoneAppleIphone'
  | 'SmartphoneIphoneAndroidBezelless'
  | 'SmartphoneWithOneCamera'
  | 'SmartphoneWithTwoCameras'
  | 'SmartwatchRound'
  | 'SmartwatchSquare'
  | 'Smile'
  | 'SmilingSmile'
  | 'Smog'
  | 'SnowflakeSnowAcUnitAirConditioner'
  | 'Snow'
  | 'SofaBed'
  | 'SofaEventSeat'
  | 'SortByAlphabetAz'
  | 'SortHighToLowFilterList'
  | 'SortLowToHighFilterList'
  | 'SoundMessage'
  | 'SoundOffMute'
  | 'Spa'
  | 'SpeakerGroupSpeakers'
  | 'SpeakerSoundDynamic'
  | 'SpellCheck'
  | 'Split'
  | 'SquareQuadrilateralTetragon'
  | 'StarGradeRatingFavoriteFavourite'
  | 'StationerySupplies'
  | 'Stool'
  | 'Stop'
  | 'StopCircle'
  | 'StorageServer'
  | 'Store'
  | 'Stove'
  | 'SubdirectoryArrowLeft'
  | 'SubdirectoryArrowRight'
  | 'SubscriptionsAddedLibrary'
  | 'Subtitles'
  | 'SunBrightnessHigh'
  | 'Sunrise'
  | 'Sunset'
  | 'SurroundSound3DSound'
  | 'SwapCalls'
  | 'SwapHorizontal'
  | 'SwapVertical'
  | 'SyncAutorenew'
  | 'SyncDisabled'
  | 'SyncError'
  | 'SystemUpdate'
  | 'TabButton'
  | 'Table'
  | 'TableOfContentTocContent'
  | 'TabletAndroid'
  | 'TabletAppleIpad'
  | 'TableTennisPingPong'
  | 'TabletIpad'
  | 'TabTabs'
  | 'Taoism'
  | 'Tennis'
  | 'TerrainMountains'
  | 'TetraPak'
  | 'TextAlignCenter'
  | 'TextAlignLeftViewHeadList'
  | 'TextAlignRight'
  | 'TextClip'
  | 'TextFormat'
  | 'TextJustifyAlls'
  | 'TextJustifyCenter'
  | 'TextJustifyLeft'
  | 'TextJustifyRight'
  | 'TextMessage'
  | 'TextOverflow'
  | 'TextWrap'
  | 'TheatersEntertainment'
  | 'ThunderstormWithHail'
  | 'ThunderstormWithRain'
  | 'ThunderstormWithSnow'
  | 'TicketActivityPlay'
  | 'Time'
  | 'Timer'
  | 'TimerClock'
  | 'TLetter'
  | 'tmp.txt'
  | 'TodayDate'
  | 'ToddlerBed'
  | 'ToysToyShopChildrensRoom'
  | 'Track'
  | 'Traffic'
  | 'TransfersImportExportCompare'
  | 'Transform'
  | 'TranslateTranslation'
  | 'Trapezoid'
  | 'TrashFull'
  | 'TrashGarbageDeleteRemoveBin'
  | 'TrashPartlyFull'
  | 'TravelCard'
  | 'TrendingDown'
  | 'TrendingFlat'
  | 'TrendingUp'
  | 'TriangleTrigon'
  | 'TShirtRoundNeckClothing'
  | 'TvTelevisionCable'
  | 'ULetter'
  | 'Unarchive'
  | 'Undo'
  | 'Unfold'
  | 'UpdateRefresh'
  | 'Upload'
  | 'UpsideDown'
  | 'UsdDollar'
  | 'UserIdentityPersonPersonal'
  | 'Utilities'
  | 'VectorImage'
  | 'Vibration'
  | 'Video'
  | 'VideoCall'
  | 'VideoLabel'
  | 'VideoMessage'
  | 'ViewArray'
  | 'ViewCarousel'
  | 'ViewColumnsViewWeek'
  | 'ViewDay'
  | 'ViewGrid'
  | 'ViewModule'
  | 'ViewQuilt'
  | 'ViewStreamViewAgenda'
  | 'VinylAlbum'
  | 'VLetter'
  | 'VoiceMessage'
  | 'VoiceSettingsMicrophone'
  | 'VolumeDown'
  | 'VolumeMute'
  | 'VolumeUp'
  | 'Vpn'
  | 'Wallet'
  | 'WarningReportInDiamondProblem'
  | 'WarningReportProblem'
  | 'WatchAnalog'
  | 'WaterBed'
  | 'Widgets'
  | 'WifiAlertSignalWifi1'
  | 'WifiAlertSignalWifi2'
  | 'WifiAlertSignalWifi3'
  | 'WifiAlertSignalWifi4'
  | 'WifiLock'
  | 'WifiSignal1'
  | 'WifiSignal2'
  | 'WifiSignal3'
  | 'WifiSignal4'
  | 'WifiTethering'
  | 'WindowMacosMacintosh'
  | 'WindowWindows'
  | 'WindSpeedHign'
  | 'WindSpeedLow'
  | 'WindSpeed'
  | 'WirelessNfc'
  | 'WLetter'
  | 'WorkBusinessCenterBag'
  | 'Workspace'
  | 'WorkTable'
  | 'XLetter'
  | 'YLetter'
  | 'ZLetter'
  | 'ZoomInArrows'
  | 'ZoomIn'
  | 'ZoomOutArrows'
  | 'ZoomOut'
  | 'Eye'
  | 'AddUser'
