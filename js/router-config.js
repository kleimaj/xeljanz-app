var app = angular.module('Xeljanz-App', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  
    $locationProvider.html5Mode({
      enabled: false,
    });

    $stateProvider
        .state('LANDING-PAGE', {
            url: '/',
            templateUrl: 'landing-page.html',
        })
        .state('MOA', {
            url: '/moa',
            templateUrl: 'content/moa/moa.html',
        })
        .state('CT', {
            url: '/clinical-trials',
            templateUrl: 'content/ct/ct-landing.html'
        })
        .state ('STUDY-DESIGN', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 0
            }
        })
        .state ('ENDPOINTS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 1
            }
        })
        .state ('SECONDARY-SAFETY-ENDPOINTS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 2
            }
        })
        .state ('PATIENT-DEMOGRAPHICS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 3
            }
        })
        .state ('PHASE-PK-ANALYSIS', {
            url: '/clinical-trials/main',
            templateUrl: 'content/ct/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 4
            }
        })
        .state ('DOSAGE-REGIMEN', {
            url: '/clinical-trials/dosage-regimen',
            templateUrl: 'content/ct/study-design/dosage-regimen.html'
        })
        .state ('STATISTICAL-ANALYSIS', {
            url: '/clinical-trials/statistical-analysis',
            templateUrl: 'content/ct/study-design/statistical-analysis.html'
        })
        .state ('PATIENT-DISPOSITION', {
            url: '/clinical-trials/patient-disposition',
            templateUrl: 'content/ct/study-design/patient-disposition.html'
        })
        .state ('JIA-CATEGORIES', {
            url: '/clinical-trials/jia-categories',
            templateUrl: 'content/ct/study-design/jia-categories.html'
        })
        .state('BASELINE-DISEASE-CHARACTERISTICS', {
            url: '/clinical-trials/baseline-disease-characteristics',
            templateUrl: 'content/ct/patient-demographics/disease-characteristics.html'
        })
        .state('TRIAL-DESIGN', {
            url: '/clinical-trials/trial-design',
            templateUrl: 'content/ct/pk-analysis/trial-design.html'
        })
        .state('PLASMA-CONCENTRATIONS', {
            url: '/clinical-trials/plasma-concentrations',
            templateUrl: 'content/ct/pk-analysis/plasma-concentrations.html'
        })
        .state('EFFICACY', {
            url: '/efficacy',
            templateUrl: 'content/efficacy/efficacy-landing.html'
        })
        .state('PRIMARY-ENDPOINTS', {
            url: '/efficacy/main',
            templateUrl: 'content/efficacy/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 0
            }
        })
        .state('SECONDARY-ENDPOINTS', {
            url: '/efficacy/main',
            templateUrl: 'content/efficacy/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 2
            }
        })
        .state('DOSING', {
            url: '/dosing',
            templateUrl: 'content/dosing/landing.html'
        })
        .state('DOSING-ADMINISTRATION', {
            url: '/dosing/main',
            templateUrl: 'content/dosing/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 0
            }
        })
        .state('ORAL-SOLUTION', {
            url: '/dosing/main',
            templateUrl: 'content/dosing/main.html',
            controller: 'slideCtrl',
            params: {
                slideIndex: 1
            }
        })
        .state('DOSE-ADJUSTMENTS', {
            url: '/dosing/dose-adjustments',
            templateUrl: 'content/dosing/dosing/dose-adjustments.html'
        })
        .state('PREGNANCY', {
            url: '/dosing/pregnancy',
            templateUrl: 'content/dosing/dosing/pregnancy.html'
        })
});

app.controller("slideCtrl", function ($scope, $state, $stateParams) {
    // console.log($stateParams.slideIndex);
    initSwiper($stateParams.slideIndex);
});

function initSwiper (slideIndex) {
    var swiper = new Swiper('.mySwiper', {
        initialSlide: slideIndex,
        // autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="` + className + `"></span>`;
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper.on('slideChange', function () {
        //   $('#ct.container').scrollTop(0);
        // document.querySelector('.mySwiper').scrollTop=0
        if (swiper.isEnd)
          document.querySelector('.review-btn').classList.remove('vis-hidden');
        else {
          document.querySelector('.review-btn').classList.add('vis-hidden');
        }
      });
      
}