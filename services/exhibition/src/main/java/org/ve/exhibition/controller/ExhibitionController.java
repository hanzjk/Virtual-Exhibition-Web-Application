package org.ve.exhibition.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.ve.exhibition.model.Exhibition;
import org.ve.exhibition.model.Exhibitor;
import org.ve.exhibition.service.ExhibitionService;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/exhibitions")
public class ExhibitionController {
    private final ExhibitionService exhibitionService;

    @GetMapping ("/user/{exhibitionOwnerId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> getExhibitionByExhibitionOwnerId(@PathVariable String exhibitionOwnerId) throws InterruptedException, ExecutionException {
        return exhibitionService.getExhibitionByExhibitionOwnerId(exhibitionOwnerId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public String addExhibition(@RequestBody Exhibition exhibition) throws InterruptedException, ExecutionException{
        return exhibitionService.addExhibition(exhibition);
    }

    @GetMapping ("/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> getExhibition(@PathVariable String Id) throws InterruptedException, ExecutionException{
        return exhibitionService.getExhibition(Id);
    }

    @GetMapping ("getByExhibitionOwner/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Exhibitor> getByExhibitionOwner(@PathVariable String Id) throws InterruptedException, ExecutionException{
        return exhibitionService.getByExhibitionOwner(Id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Exhibition> getExhibitions() throws CancellationException {
        return exhibitionService.getExhibitions();
    }

    @GetMapping("/exhibition/{exhibitionId}")
    @ResponseStatus(HttpStatus.OK)
    public Exhibition getExhibitionByExhibitionId(@PathVariable String exhibitionId) throws CancellationException, InterruptedException, ExecutionException{
        return exhibitionService.getExhibitionByExhibitionId(exhibitionId);
    }

    @PutMapping ("approve/{exhibitionId}")
    @ResponseStatus(HttpStatus.OK)
    public String approveExhibition(@PathVariable String exhibitionId) throws InterruptedException, ExecutionException {
        return exhibitionService.approveExhibition(exhibitionId);
    }

    @PutMapping ("/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public String updateExhibitions(@RequestBody Exhibition exhibition, @PathVariable String Id) throws InterruptedException, ExecutionException {
        return exhibitionService.updateExhibition(exhibition,Id);
    }

    @DeleteMapping ("/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteExhibition(@PathVariable String Id) {
        return exhibitionService.deleteExhibition(Id);
    }

    @PutMapping("/{Id}/start")
    @ResponseStatus(HttpStatus.OK)
    public String startExhibition(@PathVariable String Id,@RequestParam boolean start) throws InterruptedException, ExecutionException {
        return exhibitionService.startExhibition(Id,start);
    }
    @PostMapping("/video/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> uploadSponsorVideos(@PathVariable String Id, @RequestParam("files") MultipartFile[] files) throws Exception {
        return exhibitionService.uploadSponsorVideos(Arrays.asList(files), Id);
    }

    @PutMapping ("/activeUsers/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public String updateActiveUsers(@PathVariable String Id, @RequestParam int number) throws InterruptedException, ExecutionException {
        return exhibitionService.updateActiveUsers(Id,number);
    }

    @PutMapping ("/visitedUsers/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public String updateVisitedUsers(@PathVariable String Id) throws InterruptedException, ExecutionException {
        return exhibitionService.updateVisitedUsers(Id);
    }

    @GetMapping ("/visitedUsers/{Id}")
    @ResponseStatus(HttpStatus.OK)
    public Integer getVisitedUsers(@PathVariable String Id) throws InterruptedException, ExecutionException {
        return exhibitionService.getVisitedUsers(Id);
    }

    @GetMapping("/test")
    public ResponseEntity<String> testGetEndpoints(){
        return ResponseEntity.ok("Test endpoint is working");
    }

}
