'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">romiai documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' : 'data-bs-target="#xs-controllers-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' :
                                            'id="xs-controllers-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' :
                                        'id="xs-injectables-links-module-AppModule-e21cb6d20716b6c98b6fbc4c77c97f1e1b457a26975f06af5f474ecd38a15a445f026de7e448e507ef0ba712eec36278562acf156bec09e2951eeb99eb6ceb28"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MongoModule.html" data-type="entity-link" >MongoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatientsModule.html" data-type="entity-link" >PatientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' : 'data-bs-target="#xs-controllers-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' :
                                            'id="xs-controllers-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' }>
                                            <li class="link">
                                                <a href="controllers/PatientsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' : 'data-bs-target="#xs-injectables-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' :
                                        'id="xs-injectables-links-module-PatientsModule-67a27e51e76b475c88c61d21c9286c8917469288f2061a807a8403d9a690be7300dd0cf5af7141ece776f017470d27728051248b21bf2696f5fbbe19055aaee4"' }>
                                        <li class="link">
                                            <a href="injectables/PatientsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePatientDto.html" data-type="entity-link" >CreatePatientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientsSwagger.html" data-type="entity-link" >PatientsSwagger</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePatientDto.html" data-type="entity-link" >UpdatePatientDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiResponse.html" data-type="entity-link" >ApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomError.html" data-type="entity-link" >CustomError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorResponse.html" data-type="entity-link" >ErrorResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});