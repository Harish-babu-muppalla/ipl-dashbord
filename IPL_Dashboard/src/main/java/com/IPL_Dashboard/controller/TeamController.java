package com.IPL_Dashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.IPL_Dashboard.Repository.MatchRepository;
import com.IPL_Dashboard.Repository.TeamRepository;
import com.IPL_Dashboard.model.Match;
import com.IPL_Dashboard.model.Team;

@RestController
@CrossOrigin
public class TeamController {
	
	
	private TeamRepository teamRepo;
	private MatchRepository matchRepo;
	
	@Autowired
	public TeamController(TeamRepository teamRepo, MatchRepository matchRepo) {
		this.teamRepo = teamRepo;
		this.matchRepo = matchRepo;
	}

	@GetMapping("/team")
	public Iterable<Team> getAllTeams(){
		return this.teamRepo.findAll();
	}

	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team =  this.teamRepo.findByTeamName(teamName);
		team.setMatches( this.matchRepo.findLatestMatchesbyTeam(teamName, 4));
		return team;
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> geatMatchesForYear(@PathVariable String teamName, @RequestParam int year){
		LocalDate startDate =LocalDate.of(year,1,1);
		LocalDate endDate =LocalDate.of(year+1,1,1);
		return this.matchRepo.getMatchesByTeamBetweenDate(teamName,startDate,endDate);	
	}

}
