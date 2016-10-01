angular
    .module('JSONConverter', [])
    .controller('JSONController', JSONControllerFn);

function JSONControllerFn($scope){
    $scope.rawData = {
        "JOB": {
            "SAMPLE": [{
                "-SAMPLETIME": "18/09/2016 1100",
                "SCHEME": [{
                    "ANALYTE": {
                        "-PI_TAG": "HV_FLOT_FEED_CNTLSOLID_S_pct",
                        "-NUMERICVALUE": "1.023800015449524"
                    }
                }, {
                    "ANALYTE": {
                        "-ANALYTENAME": "DrySample",
                        "-NUMERICVALUE": "0.239999994635582"
                    }
                }, {
                    "ANALYTE": {
                        "-PI_TAG": "HV_FLOT_FEED_CNTLSOLID_Ag_ppm",
                        "-NUMERICVALUE": "14.90999984741211"
                    }
                }, {
                    "ANALYTE": {
                        "-PI_TAG": "HV_FLOT_TAIL_CNTLSOLID_Au_g/t",
                        "-NUMERICVALUE": "1.149999976158142"
                    }
                }]
            }, {
                "-SAMPLETIME": "18/09/2016 1100",
                "SCHEME": [{
                    "ANALYTE": {
                        "-PI_TAG": "HV_FLOT_TAIL_CNTLSOLID_S_pct",
                        "-NUMERICVALUE": "0.7418000102043152"
                    }
                }, {
                    "ANALYTE": {
                        "-NUMERICVALUE": "0.2199999988079071"
                    }
                }, {
                    "ANALYTE": {
                        "-PI_TAG": "HV_FLOT_TAIL_CNTLSOLID_Ag_ppm",
                        "-NUMERICVALUE": "3.674999713897705"
                    }
                }, {
                    "ANALYTE": {
                        "-ANALYTENAME": "Au",
                        "-NUMERICVALUE": "0.1599999964237213"
                    }
                }]
            }, {
                "-SAMPLETIME": "18/09/2016 1100",
                "SCHEME": [{
                    "ANALYTE": {
                        "-PI_TAG": "HV_CONC_LEACH_FEED_CNTLSOLID_S_pct",
                        "-NUMERICVALUE": "7.076700210571289"
                    }
                }, {
                    "ANALYTE": {
                        "-NUMERICVALUE": "0.2800000011920929"
                    }
                }, {
                    "ANALYTE": {
                        "-PI_TAG": "HV_CONC_LEACH_FEED_CNTLSOLID_Ag_ppm",
                        "-NUMERICVALUE": "169.8899993896484"
                    }
                }, {
                    "ANALYTE": {
                        "-PI_TAG": "HV_CONC_LEACH_FEED_CNTLSOLID_Au_g/t",
                        "-NUMERICVALUE": "10.96000003814697"
                    }
                }]
            }, {
                "-SAMPLETIME": "18/09/2016 1100",

                "SCHEME": [{
                    "ANALYTE": {
                        "-NUMERICVALUE": "0.2300000041723251"
                    }
                }, {
                    "ANALYTE": {

                        "-PI_TAG": "HV_CONC_LEACH_TK1_CNTLSOLID_Ag_ppm",
                        "-NUMERICVALUE": "85.15499114990234"
                    }
                }, {

                    "ANALYTE": {
                        "-PI_TAG": "HV_CONC_LEACH_TK1_CNTLSOLID_Au_g/t",
                        "-NUMERICVALUE": "544"
                    }
                }]
            }]
        }
    };
    $scope.sample = $scope.rawData.JOB.SAMPLE;
    $scope.sampleTime = function() {
        return 'Sampletime - ' + $scope.sample[0]['-SAMPLETIME'];
    }

    $scope.ObjArray = function(){
        //var sample = $scope.rawData.JOB.SAMPLE;
        var ObjArr = [];
        var obj;
        angular.forEach($scope.rawData.JOB.SAMPLE, function(sample) {
            var scheme = sample['SCHEME'];
            angular.forEach(scheme, function(x) {
                obj= {};
                obj.pi_tag = x.ANALYTE['-PI_TAG'] || 'undefined';
                obj.num_value = x.ANALYTE['-NUMERICVALUE'];
                ObjArr.push(obj);
            })
        })
        return ObjArr;
    }

    $scope.displayArray = $scope.ObjArray();

    $scope.processJSON  = function(data){
        $scope.rawData = JSON.parse(data);
        $scope.displayArray = $scope.ObjArray();
    }
}