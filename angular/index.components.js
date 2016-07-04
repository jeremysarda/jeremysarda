import {SplitMenuNavBarComponent} from './app/components/split-menu-nav-bar/split-menu-nav-bar.component';
import {SplitMenuComponent} from './app/components/split-menu/split-menu.component';
import {LeftMenuComponent} from './app/components/left-menu/left-menu.component';
import {AppHeaderComponent} from './app/components/app-header/app-header.component';
import {AppViewComponent} from './app/components/app-view/app-view.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('splitMenuNavBar', SplitMenuNavBarComponent)
	.component('splitMenu', SplitMenuComponent)
	.component('leftMenu', LeftMenuComponent)
    .component('appHeader', AppHeaderComponent)
    .component('appView', AppViewComponent)
    .component('resetPassword', ResetPasswordComponent)
    .component('forgotPassword', ForgotPasswordComponent)
    .component('loginForm', LoginFormComponent)
    .component('registerForm', RegisterFormComponent);

